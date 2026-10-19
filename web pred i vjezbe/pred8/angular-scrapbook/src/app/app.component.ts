import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from "./message/message.component";
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

import { FadeInDirective } from "./fade-in.directive";
import { TDFComponent } from './tdf/tdf.component';
import { MDFComponent } from './mdf/mdf.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, MessageComponent, CardComponent, CommonModule, FadeInDirective, TDFComponent, NavComponent],
  imports: [NavComponent, RouterOutlet, MDFComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-scrapbook';

  messages: { text: string, id: number }[] = [
    { text: "Embrace kindness", id: 0 },
    { text: "Celebrate diversity", id: 1 },
    { text: "Cherish our planet", id: 2 }
  ];

  handle(event: any) {
    console.log(event);
  }

  passedByReference: number = 5;

  isAdmin: boolean = true;


  setSquareStyle(i: number) {
    const both_have: object = { 'width': '50px', 'height': '50px' };

    const background = (i === 0) ? 'red' : 'blue';

    // console.log({...both_have, background})

    return { ...both_have, background };

  }


  show_message: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.show_message = false;
    }, 2000);
  }

}

