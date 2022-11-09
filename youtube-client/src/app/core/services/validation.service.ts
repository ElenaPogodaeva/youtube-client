import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import type { ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]/.test(value);

      const hasLowerCase = /[a-z]/.test(value);

      const hasNumeric = /[0-9]/.test(value);

      const hasSpecialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

      if (control.value.length < 8) {
        return { passwordStrength: 'at least 8 characters' };
      }

      if (!hasUpperCase || !hasLowerCase) {
        return { passwordStrength: 'a mixture of both uppercase and lowercase letters' };
      }

      if (!hasNumeric || !(hasUpperCase && hasLowerCase)) {
        return { passwordStrength: 'a mixture of letters and numbers' };
      }

      if (!hasSpecialCharacters) {
        return { passwordStrength: 'inclusion of at least one special character, e.g., ! @ # ? ' };
      }

      return null;
    };
  }
}
