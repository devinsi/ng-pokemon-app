import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
    this.setBorder('#f5f5f5');
    this.setHeight(180);
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#009688');
  } 

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 3px ${color}`;
  }
}
