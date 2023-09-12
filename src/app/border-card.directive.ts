import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;
  private defaultScale: number = 1;
  private mouseEnterScale: number = 1.1;
  

  constructor(private el: ElementRef) { 
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
    this.setCardScale(this.defaultScale);
   }

  @Input('pkmBorderCard') borderColor: string; //allias
  // @Input() pkmBorderCard: string; // without allias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
    this.setCardScale(this.mouseEnterScale);
  } 

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
    this.setCardScale(this.defaultScale);
  }

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string){
    this.el.nativeElement.style.border = `solid 3px ${color}`;
  }

  setCardScale(scale: number){
    this.el.nativeElement.style.scale = `${scale}`;
  }
}
