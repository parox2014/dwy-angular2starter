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
  Output,
  EventEmitter,
  AfterViewInit
} from 'angular2/core'

import {ProfileForm} from '../form/profile.form';

import {Angular2Demo} from "../app";
import {DomRenderer} from "angular2/src/platform/dom/dom_renderer";
import {COMMON_DIRECTIVES,FormBuilder} from "angular2/common";

import {Observable} from 'rxjs/Observable'
import {Observer} from 'rxjs/Observer'
import {Http,Response,RequestOptions,RequestOptionsArgs,URLSearchParams,Headers} from "angular2/http";

const zone=window['zone']||{};
const TRANSITION_END = 'transitionend webkitTransitionEnd oTransitionEnd mozTransitionEnd msTransitionEnd';

@Component({
  selector: 'modal-header',
  inputs: ['modalTitle'],
  outputs: ['onClose'],
  host: {
    'class': 'modal-header',
    'style': 'display:block',
    'role': 'header',
    'aria-label': 'modal-header'
  },
  template: `
    <button type="button" class="close" aria-label="Close">
      <span aria-hidden="true" (click)="onClick($event)">&times;</span>
    </button>
    <h4 class="modal-title">{{modalTitle}}</h4>
  `
})

export class ModalHeader {
  onClose = new EventEmitter<any>();

  onClick(e) {
    this.onClose.emit(e);
  }
}

@Component({
  selector: 'modal-footer',
  inputs: ['okText', 'cancelText'],
  outputs: ['onCancel', 'onConfirm'],
  host: {
    'class': 'modal-footer',
    'style': 'display:block',
    'role': 'footer',
    'aria-label': 'modal-footer'
  },
  template: `
    <button type="button" class="btn btn-default" (click)="onCancelButtonClick($event)">{{cancelText}}</button>
    <button type="button" class="btn btn-primary" (click)="onConfirmButtonClick()">{{okText}}</button>
  `
})

export class ModalFooter {
  onCancel = new EventEmitter<any>();
  onConfirm = new EventEmitter<any>();

  onCancelButtonClick(e:any):void {
    this.onCancel.emit(e);
  }

  onConfirmButtonClick(e:any):void {
    this.onConfirm.emit(e);
  }
}


@Component({
  selector: 'modal',
  host: {
    'class': 'modal fade',
    'role': 'dialog'
  },
  directives: [COMMON_DIRECTIVES, ModalHeader, ModalFooter],
  template: `
  <div class="modal-dialog">
    <div class="modal-content">

      <modal-header [modalTitle]="title" (onClose)="cancel($event)" *ngIf="showHeader"></modal-header>

      <div class="modal-body">
        <p>{{template}}</p>
        <template #template></template>
      </div>

      <modal-footer *ngIf="showFooter"
        [okText]="okText"
        [cancelText]="cancelText"
        (onConfirm)="confirm($event)"
        (onCancel)="cancel($event)">
      </modal-footer>
    </div><!-- /.modal-content -->
  </div>
  `
})

export class Modal implements AfterViewInit {

  @Input() title:string = 'Are you sure';
  @Input() okText:string = 'Remove';
  @Input() cancelText:string = 'Cancel';
  @Input() tempalte:string;
  @Input() showHeader:boolean = true;
  @Input() showFooter:boolean = true;

  constructor(public renderer:Renderer,
              public elRef:ElementRef,
              @Query('template') public tempRef:TemplateRef,
              public vcRef:ViewContainerRef) {

  }

  ngAfterViewInit() {

  }

  confirm() {
  }

  cancel() {
  }

  open():void {
    var elRef = this.elRef;
    var renderer = this.renderer;

    renderer.setElementStyle(elRef, 'display', 'block');

    zone.setTimeout(()=> {
      renderer.setElementClass(elRef, 'in', true);
    }, 0);
  }

  close(callback:Function):void {
    var renderer = this.renderer;
    var elRef = this.elRef;
    var onTransitionEnd = ()=> {
      callback();
      this.off(TRANSITION_END, onTransitionEnd);
    };

    this.on(TRANSITION_END, onTransitionEnd);

    renderer.setElementClass(elRef, 'in', false);
  }

  on(evtName:string, listener:Function):void {
    this.handleEventListener(evtName, listener);
  }

  off(evtName:string, listener:Function):void {
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

interface ModalOption {
  title?:string;
  okText?:string;
  cancelText?:string;
  showHeader?:boolean;
  showFooter?:boolean;
}


@Injectable()
export class Dialog {
  app:Angular2Demo;

  constructor(public dcl:DynamicComponentLoader,
              @Inject(forwardRef(()=>Angular2Demo)) app:Angular2Demo,
              public injector:Injector) {
    this.app = app;
  }

  open(tempalte:string, option?:ModalOption):Observable {

    let injector = Injector.resolve([
      provide(Renderer, {useClass: DomRenderer})
    ]);

    return new Observable(subscriber=> {
      this
        .dcl
        .loadNextToLocation(Modal, this.app.elRef, injector)
        .then((compRef:ComponentRef)=> {
          var instance = compRef.instance;
          var oldClose = instance.close;

          if (option) {
            Object.assign(instance, option);
          }

          instance.close = function () {
            oldClose.call(instance, ()=> {
              compRef.dispose();
            });
          }

          instance.cancel = function () {
            this.close();
            subscriber.next(false);
            subscriber.complete();
          };

          instance.confirm = function () {
            this.close();
            subscriber.next(true);
            subscriber.complete();
          };

          instance.template = tempalte;

          instance.open();
        })
        .catch((err)=> {
          subscriber.error(err);
        });
    });
  }
}

@Component({
  selector: 'modal-component',
  providers: [Dialog],
  directives: [Modal],
  template: `
    <button class="btn btn-primary" (click)="onBtnClick()">Open Modal</button>
    <h1>{{data}}</h1>
  `
})

export class ModalComponent {
  data:string;

  constructor(public dialog:Dialog, public http:Http) {
  }

  onBtnClick() {
    this.dialog
      .open('Are you sure suck my dick?')
      .subscribe(result=> {
        if (result) {
          zone.alert('you suck');
        } else {
          zone.alert('you do not suck');
        }
      });
  }
}


