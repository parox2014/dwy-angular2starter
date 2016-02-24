import {Component} from 'angular2/core';
import {FORM_DIRECTIVES,CORE_DIRECTIVES,FormBuilder,AbstractControl,Control,ControlGroup} from 'angular2/common';
import {EmailRequiredDirective} from '../directives/directives';

import {Profile} from './profile.interface';

@Component({
  selector:'profile-form',
  directives:[FORM_DIRECTIVES,CORE_DIRECTIVES,EmailRequiredDirective],
  templateUrl:'app/form/profile-form.html'
})

export class ProfileForm{
  profile:Profile={};
  profileForm:ControlGroup;
  emailCtrl:AbstractControl;
  nickNameCtrl:AbstractControl;
  genderCtrl:AbstractControl;
  constructor(fb:FormBuilder){
    let form=this.profileForm=fb.group({
      email:[''],
      nickName:[''],
      gender:['female']
    });

    this.emailCtrl=form.controls['email'];
    this.nickNameCtrl=form.controls['nickName'];
    this.genderCtrl=form.controls['gender'];
  }
  get value():Object{
    return this.profileForm.value;
  }
  onSubmit(){
    console.log(this.value);
  }
}