import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  imports: [NgbCollapseModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isMenuCollapes = false;
}
