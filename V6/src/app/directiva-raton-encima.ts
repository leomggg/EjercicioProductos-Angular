import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'a[DirectivaRatonEncima]'
})
export class DirectivaRatonEncima {

  @HostBinding('class.ratonEncima') isHovered = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }

  constructor() { }

}
