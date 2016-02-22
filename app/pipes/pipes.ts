import {Pipe,PipeTransform} from 'angular2/core';

@Pipe({name:'myDate'})

//implements为类实现预定义接口的关键字
export class MyDate implements PipeTransform{
  transform(date,args){
    return window['moment'](date).format(args[0]||'YYYY-MM-DD HH:mm');
  }
}

export const CUSTOM_PIPES:Array<any>=[MyDate];