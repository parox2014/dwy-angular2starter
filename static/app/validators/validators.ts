import {Validator,Control} from 'angular2/common'

const EMAIL_REG:RegExp=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export class Validators{
  static emailValidator(c:Control):{[key:string]:any}{
    let isEmail:boolean=EMAIL_REG.test(c.value);
    return isEmail||c.value===''?null:{email:true};
  }
}
