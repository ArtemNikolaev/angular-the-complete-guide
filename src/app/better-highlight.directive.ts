import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input('appBetterHighlight') defaultColor = 'lightblue';
  @Input() highlightColor = 'red';
  @HostBinding('style.color') color: string;


  @HostListener('mouseenter') mouseover($ev: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave($ev: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.color = this.defaultColor;
  }

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    this.color = this.defaultColor
  }
}
