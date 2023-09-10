import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) { 
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
   }

  @Input('pkmBorderCard') borderColor: string; //allias
  // @Input() pkmBorderCard: string; // without allias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  } 

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 3px ${color}`;
  }
}
