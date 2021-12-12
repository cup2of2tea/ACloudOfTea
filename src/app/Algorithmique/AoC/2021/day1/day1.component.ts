import { OnInit, Component, ElementRef, Input, HostListener, NgZone, OnDestroy } from '@angular/core';
import { Application, IApplicationOptions } from 'pixi.js';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';


declare var $: any;
declare var Prism: any;

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.scss']
})
export class Day1_2021Component implements OnInit {

  public app: Application;


  //@Input()
  public devicePixelRatio = window.devicePixelRatio || 1;

  //@Input()
  public applicationOptions: IApplicationOptions = {};

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  isCollapsed: any;
  isCollapsed2: any;
  isCollapsed3: any;
  isCollapsed4: any;
  nav: any;
  nav2: any;

  ngOnInit() {

    setTimeout(() => { Prism.highlightAll(); }, 10);

    this.ngZone.runOutsideAngular(() => {
      this.app = new Application(this.applicationOptions);
    });
    this.elementRef.nativeElement.appendChild(this.app.view);
    this.resize();
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    setTimeout(() => { Prism.highlightAll(); }, 10);
  }

  @HostListener('window:resize')
  public resize() {
    const width = this.elementRef.nativeElement.offsetWidth;
    const height = this.elementRef.nativeElement.offsetHeight;
    const viewportScale = 1 / this.devicePixelRatio;
    this.app.renderer.resize(width * this.devicePixelRatio, height * this.devicePixelRatio);
    this.app.view.style.transform = `scale(${viewportScale})`;
    this.app.view.style.transformOrigin = `top left`;
  }

  destroy() {
    this.app.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }


}
