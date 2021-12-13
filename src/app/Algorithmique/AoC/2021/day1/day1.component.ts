import { OnInit, Component, ElementRef, Input, HostListener, NgZone, OnDestroy } from '@angular/core';
import { Application, IApplicationOptions, Sprite, Filter, Texture} from 'pixi.js';
import { Rectangle, Container} from 'pixi.js';
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
  public devicePixelRatio = 1;

  //@Input()
  public applicationOptions: IApplicationOptions = {
    width: 800, height: 800, backgroundColor: 0x1099bb,
};

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  isCollapsed: any;
  isCollapsed2: any;
  isCollapsed3: any;
  isCollapsed4: any;
  nav: any;
  nav2: any;

  submarine: any;
  filter: any;
  container: any;

  uniforms = {
    brightness:{type:"f", value:1},
    submarine:{type:"vec2", value:{x:600, y:600}},
    resolution:{type:"vec2",value:[800,800]},
    glowColor:{type:"vec3", value:[0,0,1]},
  };

  _this: any = this;

  ngOnInit() {

    setTimeout(() => { Prism.highlightAll(); }, 10);

    this.ngZone.runOutsideAngular(() => {
      this.app = new Application(this.applicationOptions);

      this.container = new Container();
      this.container.filterArea = new Rectangle(0, 0, 800, 800);
      this.app.stage.addChild(this.container);

      this.submarine = Sprite.from('assets/Pixis/submarine.png');

            // center the sprite's anchor point
      this.submarine.anchor.set(0.5);

      // move the sprite to the center of the screen
      this.submarine.x = 600;
      this.submarine.y = 600;
      this.container.addChild(this.submarine);

      this.app.stop();

      this.app.loader.add('shader', 'assets/Pixis/shader.frag').add('shader2','assets/Pixis/vertex.frag')
          .load(this.onLoaded.bind(this));

      this.app.ticker.add((delta) => {
        this.submarine.x -= delta;
        //this.filters.unifor

        this.filter.uniforms.submarine.value.x = (this.submarine.x) / 800.;
        this.filter.uniforms.submarine.value.y = (this.submarine.y) / 800.;
      });
        

    });
    this.elementRef.nativeElement.appendChild(this.app.view);
    this.resize();
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    setTimeout(() => { Prism.highlightAll(); }, 10);
  }

  onLoaded(loader, res){
    this.filter = new Filter(res.shader2.data, res.shader.data, this.uniforms);

    
    this.container.filters = [this.filter];

    // === WARNING ===
    // specify uniforms in filter constructor
    // or set them BEFORE first use
    // filter.uniforms.customUniform = 0.0

    // Add the filter
    // Resume application update
    this.app.start();
    
  }

  @HostListener('window:resize')
  public resize() {
    /*const width = 800;//this.elementRef.nativeElement.offsetWidth;
    const height = 800;//this.elementRef.nativeElement.offsetHeight;
    const viewportScale = 1 / this.devicePixelRatio;
    this.app.renderer.resize(width * this.devicePixelRatio, height * this.devicePixelRatio);
    this.app.view.style.transform = `scale(${viewportScale})`;
    this.app.view.style.transformOrigin = `top left`;
    */
  }

  destroy() {
    this.app.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }


}
