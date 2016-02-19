import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Profile} from './profile.interface';

@Component({
  selector:'profile-form',
  directives:[FORM_DIRECTIVES],
  templateUrl:'app/form/profile-form.html'
})

export class ProfileForm{
  profile:Profile={gender:'male'};
  constructor(){

  }

  onSubmit(){
    console.log(this.profile);
  }
}