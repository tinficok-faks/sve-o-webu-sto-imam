import { Component } from '@angular/core';

import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './mdf.component.html',
  styleUrl: './mdf.component.scss'
})
export class MDFComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });

  submit() {
    console.log(this.form.value)
  }
}
