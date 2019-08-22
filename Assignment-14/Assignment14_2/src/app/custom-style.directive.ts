import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective
{
  constructor(private element: ElementRef)
  {
    this.element.nativeElement.style.background = 'yellow';
  }

}
