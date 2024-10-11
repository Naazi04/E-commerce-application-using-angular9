import { Directive,ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[lazyLoad]'
})
export class LazyLoadDirective implements OnInit {

  @Input() lazyLoad: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const imgElement = this.el.nativeElement;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          imgElement.src = this.lazyLoad;
          observer.disconnect();
        }
      });
    });
    observer.observe(imgElement);
  }
}
