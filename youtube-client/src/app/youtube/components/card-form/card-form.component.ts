import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../../app/core/services/validation.service';

const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  cardForm!: FormGroup;

  constructor(private fb: FormBuilder, private validationService: ValidationService) {}

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.maxLength(255)]],
      imgLink: ['', [Validators.required, Validators.pattern(reg)]],
      videoLink: ['', [Validators.required, Validators.pattern(reg)]],
      creationDate: ['', [Validators.required, this.validationService.dateValidator()]],
    });
  }

  get title() {
    return this.cardForm.get('title');
  }

  get description() {
    return this.cardForm.get('description');
  }

  get imgLink() {
    return this.cardForm.get('imgLink');
  }

  get videoLink() {
    return this.cardForm.get('videoLink');
  }

  get creationDate() {
    return this.cardForm.get('creationDate');
  }

  public submit() {}
}
