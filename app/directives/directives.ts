import {Directive,provide} from 'angular2/core'
import {NG_VALIDATORS} from 'angular2/common'
import {Validators} from '../validators/validators';

@Directive({
  selector: '[email-required]',
  providers: [provide(NG_VALIDATORS,{useValue:Validators.emailValidator,multi:true})]
})

export class EmailRequiredDirective{

}