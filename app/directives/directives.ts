import {Directive,provide} from 'angular2/core'
import {NG_VALIDATORS,Validator,Control} from 'angular2/common'

const EMAIL_REG:RegExp=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

@Directive({
  selector: '[email-required]',
  providers: [provide(NG_VALIDATORS, {useExisting: EmailValidatorDirective, multi: true})]
})

export class EmailValidatorDirective implements Validator{
  validate(c:Control):{[key:string]:any}{
    let isEmail:boolean=EMAIL_REG.test(c.value);
    return isEmail?null:{email:true};
  }
}