import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostListener('mouseenter') mouseover($ev: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave') mouseleave($ev: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');

  }
}
