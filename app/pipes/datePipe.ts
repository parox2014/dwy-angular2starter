import {Pipe,PipeTransform} from 'angular2/core';

@Pipe({name:'myDate'})

export class MyDate implements PipeTransform{
  transform(date,args){
    return moment(date).format(args[0]||'YYYY-MM-DD HH:mm');
  }
}