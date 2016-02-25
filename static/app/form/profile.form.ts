import {Component,ElementRef,Renderer} from 'angular2/core';
import {FORM_DIRECTIVES,CORE_DIRECTIVES,FormBuilder,AbstractControl,Control,ControlGroup} from 'angular2/common';
import {EmailRequiredDirective,NumberRequired,AgeRequired} from '../directives/directives';
import {AnimationComponent} from '../AnimationComponent';
import {Profile} from './profile.interface';


@Component({
  selector:'profile-form',
  directives:[
    FORM_DIRECTIVES,
    CORE_DIRECTIVES,
    EmailRequiredDirective,
    NumberRequired,
    AgeRequired
  ],
  templateUrl:'app/form/profile-form.html'
})

export class ProfileForm extends AnimationComponent{
  profile:Profile={};
  profileForm:ControlGroup;
  emailCtrl:AbstractControl;
  nickNameCtrl:AbstractControl;
  genderCtrl:AbstractControl;
  age:AbstractControl;

  public animation:string='slide';
  public direction:string='leftToRight';
  constructor(fb:FormBuilder,public elRef:ElementRef,public renderer:Renderer){
    super(elRef,renderer);

    let form=this.profileForm=fb.group({
      email:[''],
      nickName:[''],
      gender:['female'],
      age:[18]
    });

    renderer.setElementStyle(elRef,'display','block');

    this.emailCtrl=form.controls['email'];
    this.nickNameCtrl=form.controls['nickName'];
    this.genderCtrl=form.controls['gender'];
    this.age=form.controls['age'];
  }
  get value():Object{
    return this.profileForm.value;
  }
  onSubmit(){
    console.log(this.value);
  }
}