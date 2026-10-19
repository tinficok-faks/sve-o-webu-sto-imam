import { Component, input, InputSignal, model, output, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {
  // message: string = "Cherish our planet";

  // input property
  message: InputSignal<string> = input<string>("Hello world");

  // output event
  feedback = output<object>();

  constructor() {

  }

  // two-way data binding (pass-by-reference)
  n = model<number>(0);

  ngOnInit() {
    const ms_rand = Math.random() * 2000;
    setTimeout(() => {
      const obj_for_parent = { ms_rand };
      this.feedback.emit(obj_for_parent);

      this.n.update(val => val + 1);

    }, ms_rand);    
  }

  ngOnDestroy() {
    console.log("MessageComponent: I'm destroyed");
  }

}
