import {
  Component,
  DynamicComponentLoader,
  Injectable,
  Renderer,
  Injector,
  ComponentRef,
  ElementRef,
  forwardRef,
  ViewContainerRef,
  TemplateRef,
  provide,
  QueryList,
  Query,
  Inject,
  Input,
  Output
} from 'angular2/core'

import {ProfileForm} from '../form/profile.form';

import {Angular2Demo} from "../app";
import {DomRenderer} from "angular2/src/platform/dom/dom_renderer";
import {COMMON_DIRECTIVES,FormBuilder} from "angular2/common";

const TRANSITION_END = 'transitionend webkitTransitionEnd oTransitionEnd mozTransitionEnd msTransitionEnd';

@Component({
  selector: 'modal',
  host: {
    'class': 'modal fade',
    'role': 'dialog'
  },
  directives: [COMMON_DIRECTIVES, ProfileForm],
  template: `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true" (click)="cancel()">&times;</span>
        </button>
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal-body">
        <p>{{template}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" (click)="cancel()">{{cancelText}}</button>
        <button type="button" class="btn btn-primary" (click)="confirm()">{{okText}}</button>
      </div>
    </div><!-- /.modal-content -->
  </div>
  `
})

export class Modal {

  @Input() title:string = 'Are you sure';
  @Input() okText:string = 'Remove';
  @Input() cancelText:string = 'Cancel';
  @Input() tempalte:string;

  constructor(public renderer:Renderer,
              public elRef:ElementRef,
              public vcRef:ViewContainerRef) {

  }

  setTitle(title:string):Modal {
    this.title = title;
    return this;
  }

  open():void {
    var elRef = this.elRef;
    var renderer = this.renderer;

    renderer.setElementStyle(elRef, 'display', 'block');

    setTimeout(()=> {
      renderer.setElementClass(elRef, 'in', true);
    }, 50);
  }

  close(callback):void {
    var renderer = this.renderer;
    var elRef = this.elRef;
    var onTransitionEnd = ()=> {
      callback();
      this.off(TRANSITION_END, onTransitionEnd);
    };

    this.on(TRANSITION_END, onTransitionEnd);

    renderer.setElementClass(elRef, 'in', false);
  }

  on(evtName, listener):void {
    this.handleEventListener(evtName, listener);
  }

  off(evtName, listener):void {
    this.handleEventListener(evtName, listener, 'removeEventListener');
  }

  handleEventListener(evtName:string, listener:Function, method:string = 'addEventListener'):void {
    let evts:Array<string> = evtName.split(/\s|,|;/);
    var renderer = this.renderer;
    var elRef = this.elRef;

    evts.forEach((evt)=> {
      renderer.invokeElementMethod(elRef, method, [evt, listener]);
    });
  }
}

var counter = 0;
@Injectable()
export class Dialog {
  app:Angular2Demo;

  constructor(public dcl:DynamicComponentLoader,
              @Inject(forwardRef(()=>Angular2Demo)) app:Angular2Demo,
              public injector:Injector) {
    this.app = app;
  }

  open(tempalte) {
    counter += 1;

    let id:string = `dialog-${counter}`;

    let injector = Injector.resolve([
      provide(Renderer, {useClass: DomRenderer}),
      provide(TemplateRef, {useClass: TemplateRef})

      //provide(FormBuilder,{useClass:FormBuilder})
    ]);

    return new Promise((resolve, reject)=> {
      this
        .dcl
        .loadNextToLocation(Modal, this.app.elRef, injector)
        .then((compRef:ComponentRef)=> {
          var instance = compRef.instance;
          var oldClose = instance.close;

          instance.close = function () {
            oldClose.call(instance, ()=> {
              compRef.dispose();
            });
          }

          instance.cancel = function () {
            this.close();
            resolve(false);
          };

          instance.confirm = function () {
            this.close();
            resolve(true);
          };

          instance.template = tempalte;
          instance.open();
        })
        .catch((err)=> {
          reject(err);
        });
    })
  }
}

@Component({
  selector: 'modal-component',
  providers: [Dialog],
  template: `
    <button class="btn btn-primary" (click)="onBtnClick()">Open Modal</button>
  `
})

export class ModalComponent {
  constructor(public dialog:Dialog) {

  }

  onBtnClick() {
    this.dialog.open('Are you sure to remove this todo?')
      .then(function (result) {
        if (result) {
          alert('you confirmed');
        } else {
          alert('you canceled');
        }
      })
      .catch((err)=> {

      });
  }
}


