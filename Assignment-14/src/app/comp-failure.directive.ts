import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective
{
    constructor(private element: ElementRef)
    {
      console.log("Inside failure directive");
    }

    @HostListener('mouseenter') onmouseenter()
    {
      this.setcolor('red');
    }

    @HostListener('mouseleave') onmouseleave()
    {
      this.setcolor('black');
    }

    setcolor(color: string)
    {
      this.element.nativeElement.style.color = color;
    }
}
