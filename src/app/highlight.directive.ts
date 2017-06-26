import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective {
	@Input('appHighlight') appHighlight: string;
	constructor(private el: ElementRef) {
		
	}
	@HostListener('mouseenter') onMouseEnter() {
		this.highlight(this.appHighlight || 'yellow');
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}
	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
		this.el.nativeElement.style.color = 'red';
	}

}
