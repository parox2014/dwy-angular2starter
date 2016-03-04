import {Component,OnDestroy,OnInit,AfterContentInit,ElementRef,Renderer} from 'angular2/core'

const ANIMATION_MAP = {
  leftToRight: 'left-to-right',
  slide:'slide',
  fade: 'fade'
};

export class AnimationComponent implements OnDestroy, AfterContentInit,OnInit {
  public delay:string;
  public animation:string;
  public direction:string;

  constructor(public elRef:ElementRef, public renderer:Renderer) {

  }

  getAnimateClassName():Array<string> {
    var cls = [];
    switch (this.animation) {
      case 'slide':
        cls.push(ANIMATION_MAP[this.animation]);
        cls.push(ANIMATION_MAP[this.direction]);
        break;
      case 'fade':
        cls.push(ANIMATION_MAP[this.animation]);
    }

    return cls;
  }
  setElementClass():void{
    this.getAnimateClassName().forEach((item:string)=>{
      this.renderer.setElementClass(this.elRef,item, true);
    });
  }
  ngOnInit(){
    if(this.animation){
      this.setElementClass();
    }
  }
  ngAfterContentInit() {
    setTimeout(()=> {
      this.renderer.setElementStyle(this.elRef, 'transitionDelay', `${this.delay}ms`);
      this.renderer.setElementClass(this.elRef, 'in', true);
    }, 0);
  }

  ngOnDestroy() {
    this.renderer.setElementClass(this.elRef, 'in', false);
  }
}
