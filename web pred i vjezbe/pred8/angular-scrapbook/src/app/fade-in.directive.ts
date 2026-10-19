import { Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  host: {
    '(mouseenter)': 'ngOnMouseEnter()',
    '(mouseleave)': 'ngOnMouseLeave()'
  }
})
export class FadeInDirective {

  constructor(protected el: ElementRef) {}

  n_steps: number = 30;
  dt: number = 20;
  ngOnInit() {
    this.el.nativeElement.style.opacity = 0;
    let counter = 0;

    let interval = setInterval(() => {
      const temporary_opacity = ++counter / this.n_steps;

      this.el.nativeElement.style.opacity = temporary_opacity;

      if (counter === this.n_steps)
        clearInterval(interval);

    }, this.dt);
  }

  original_color: string = "";
  appFadeIn = input<string>();
  ngOnMouseEnter() {
    this.original_color = this.el.nativeElement.style.background;
    this.el.nativeElement.style.background = this.appFadeIn() || "#cfecfe";
  }

  ngOnMouseLeave() {
    this.el.nativeElement.style.background = this.original_color;
  }

}
