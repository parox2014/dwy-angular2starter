import {bootstrap} from 'angular2/platform/browser'
import {LocationStrategy,HashLocationStrategy} from 'angular2/router'
import {Angular2Demo} from './app'
import {CUSTOM_DIRECTIVES} from './directives/directives';

import {
  provide,
  PLATFORM_PIPES,
  PLATFORM_COMMON_PROVIDERS,
  PLATFORM_DIRECTIVES,
  APPLICATION_COMMON_PROVIDERS
} from 'angular2/core';

import {
  ROUTER_PROVIDERS
} from "angular2/router";

import {
  COMMON_PIPES,
  COMMON_DIRECTIVES
} from "angular2/common";

import {
  HTTP_PROVIDERS,
  RequestOptions,
  BaseRequestOptions,
  Headers
} from "angular2/http";

import {LocalDataBase} from './services/DataBaseService';
import {TodoService} from './services/TodoService';

import {CUSTOM_PIPES} from './pipes/pipes';


class MyRequestOptions extends BaseRequestOptions {
  headers:Headers = new Headers({'X-Request-With': 'XMLHttpRequest'});
}

const appConfig={
  HOST:'http://www.angular2demo.com',
  APP_NAME:'Angular2 Demo',
  NAV_LIST:[['Todo', 'Todo'], ['ProfileForm'], ['Tabs']]
};

bootstrap(Angular2Demo, [ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  LocalDataBase,
  TodoService,
  ROUTER_PROVIDERS,
  provide('appConfig',{useValue:appConfig}),

  //用自定义的requestOption替换angular黙认的requestOption
  provide('RequestOptions', {useClass: MyRequestOptions}),

  //将自定义的pipe添加到platform pipe里，这样在整应用内都可以用，而不需要在每个组件里引入
  provide(PLATFORM_PIPES, {useValue: CUSTOM_PIPES, multi: true}),
  //与上同
  provide(PLATFORM_DIRECTIVES,{useValue:CUSTOM_DIRECTIVES,multi:true})
  //provide(LocationStrategy, {useClass: HashLocationStrategy})
]).then(()=> {
  console.info('Application bootstrap success');
});