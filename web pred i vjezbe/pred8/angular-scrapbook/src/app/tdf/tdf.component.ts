import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: 'app-tdf',
  imports: [FormsModule, CommonModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.scss'
})
export class TDFComponent {

  initial_mail: string = "jmaltar@mathos.hr";

  fauxSendToServer(data: object) {
    console.log(data);
  }

  submit(form: NgForm) {
    const data: object = form.value;
    this.fauxSendToServer(data);
  }
}
