// todo: add animations when https://github.com/angular/angular/issues/9947 solved
import {
  Directive, ElementRef, EventEmitter, Input, OnInit, Output,
  Renderer2, AfterViewInit
} from '@angular/core';


@Directive({
  selector: '[mdbCollapse]',
  exportAs: 'bs-collapse',
  /* tslint:disable-next-line */
})
export class CollapseDirective implements OnInit, AfterViewInit {

  @Output('showBsCollapse') public showBsCollapse: EventEmitter<any> = new EventEmitter();
  @Output('shownBsCollapse') public shownBsCollapse: EventEmitter<any> = new EventEmitter();
  @Output('hideBsCollapse') public hideBsCollapse: EventEmitter<any> = new EventEmitter();
  @Output('hiddenBsCollapse') public hiddenBsCollapse: EventEmitter<any> = new EventEmitter();


  /** This event fires as soon as content collapses */
  @Output() public collapsed: EventEmitter<any> = new EventEmitter();
  /** This event fires as soon as content becomes visible */
  @Output() public expanded: EventEmitter<any> = new EventEmitter();
  // shown
  // @HostBinding('class.in')
  // @HostBinding('class.show')
  // @HostBinding('attr.aria-expanded')
  public isExpanded = true;
  // hidden
  // @HostBinding('attr.aria-hidden')
  public isCollapsed = false;
  // stale state
  // @HostBinding('class.collapse')
  public isCollapse = true;
  // animation state
  // @HostBinding('class.collapsing')
  public isCollapsing = false;
  public collapsing = false;


  @Input() public collapse: boolean;
  @Input() public animationTime = 500;

  public maxHeight: number;


  protected _el: ElementRef;
  protected _renderer: Renderer2;

  public constructor(_el: ElementRef, _renderer: Renderer2) {
    this._el = _el;
    this._renderer = _renderer;
  }
  ngOnInit() {

    this._el.nativeElement.classList.add('show');

    this._el.nativeElement.style.transition = this.animationTime + 'ms ease';

    if (!this.collapse) {
      this._el.nativeElement.classList.remove('show');
      this.hide();
    } else {
      this.show();
    }

    this.isExpanded = this.collapse;
  }

  ngAfterViewInit() {
    this.maxHeight = this._el.nativeElement.scrollHeight;
  }

  public resize(): void {
    const container = this._el.nativeElement;
    this.maxHeight = this._el.nativeElement.scrollHeight;
    this._renderer.setStyle(container, 'height', this.maxHeight + 'px');
  }

  /** allows to manually toggle content visibility */
  public toggle(event?: any): void {
    if (!this.collapsing) {
      if (this.isExpanded) {
        this.hide();
      } else {
        this.show();
      }
    }
    try {
      if (event.type === 'click') {
        this.maxHeight = event.target.parentElement.nextElementSibling.scrollHeight;
      } else if (event.type === 'mouseenter' || event.type === 'mouseleave') {
        this.maxHeight = event.target.nextElementSibling.scrollHeight;
      }
    } catch (error) { }
  }


  /** allows to manually hide content */
  public hide(): void {
    this.collapsing = true;
    this.hideBsCollapse.emit();
    this.isCollapse = false;
    this.isCollapsing = true;

    this.isExpanded = false;
    this.isCollapsed = true;

    const container = this._el.nativeElement;

    container.classList.remove('collapse');
    container.classList.remove('show');
    container.classList.add('collapsing');

    this._renderer.setStyle(container, 'height', '0px');

    setTimeout(() => {
      container.classList.remove('collapsing');
      container.classList.add('collapse');
      this.hiddenBsCollapse.emit();
      this.collapsing = false;
    }, this.animationTime);
    this.collapsed.emit(this);
  }

  /** allows to manually show collapsed content */
  public show(): void {
    if (!this.isExpanded) {
      this.collapsing = true;
      this.showBsCollapse.emit();
      this.isCollapse = false;
      this.isCollapsing = true;

      this.isExpanded = true;
      this.isCollapsed = false;

      const container = this._el.nativeElement;

      container.classList.remove('collapse');
      container.classList.add('collapsing');

      setTimeout(() => {
        this._renderer.setStyle(container, 'height', this.maxHeight + 'px');
      }, 10);

      setTimeout(() => {
        container.classList.remove('collapsing');
        container.classList.add('collapse');
        container.classList.add('show');
        this.shownBsCollapse.emit();
        this.collapsing = false;
      }, this.animationTime - (this.animationTime * 0.5));
      this.expanded.emit(this);
    }
  }
}
