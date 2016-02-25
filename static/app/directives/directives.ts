import {Directive,provide,ElementRef} from 'angular2/core'
import {NG_VALIDATORS,Validator,Control} from 'angular2/common'


const EMAIL_REG:RegExp = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
@Directive({
  selector: 'input[type=email],input[email]',
  providers: [provide(NG_VALIDATORS, {useExisting: EmailRequiredDirective, multi: true})]
})

export class EmailRequiredDirective implements Validator {
  validate(c:Control):{[key:string]:any} {
    let isEmail:boolean = EMAIL_REG.test(c.value);
    return isEmail || c.value === '' ? null : {email: true};
  }
}

@Directive({
  selector: 'input[type=number]',
  providers: [provide(NG_VALIDATORS, {useExisting: NumberRequired, multi: true})]
})

export class NumberRequired implements Validator {
  validate(c:Control):{[key:string]:any} {
    var val = c.value;
    return typeof (val) === 'number' && !Number.isNaN(val) ? null : {number: true};
  }
}

@Directive({
  selector: 'input[age],input[name=age]',
  providers: [provide(NG_VALIDATORS, {useExisting: AgeRequired, multi: true})]
})

export class AgeRequired implements Validator {
  validate(c:Control):{[key:string]:any} {
    var val = c.value;
    return val > 0 && val < 100 ? null : {age: true};
  }
}

@Directive({
  selector: 'input[auto-focus]'
})

export class AutoFocus {
  constructor(private elRef:ElementRef) {

  }

  ngAfterContentInit() {
    setTimeout(()=> {
      this.elRef.nativeElement.focus();
    }, 50);
  }
}

@Directive({
  selector: 'input[auto-select]'
})

export class AutoSelect {
  constructor(private elRef:ElementRef) {

  }

  ngAfterContentInit() {
    setTimeout(()=> {
      this.elRef.nativeElement.select();
    }, 50);
  }
}