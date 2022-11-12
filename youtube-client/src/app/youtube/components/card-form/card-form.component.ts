import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../../app/core/services/validation.service';

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
      title: ['', [Validators.required]],
      description: [''],
      imgLink: ['', [Validators.required]],
      videoLink: ['', [Validators.required]],
      creationDate: ['', [Validators.required]],
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
