// import { Injectable } from '@angular/core';
// declare let toastr : any;

// @Injectable({
//   providedIn: 'root'
// })
// export class ToastrService {

//   success(message:string, title?: String){
//     toastr.success(message,title);
//   }
//   info(message:string, title?: String){
//     toastr.info(message,title);
//   }
//   warning(message:string, title?: String){
//     toastr.warning(message,title);
//   }
//   error(message:string, title?: String){
//     toastr.error(message,title);
//   }
// }

import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

export interface Toastr {
  success(msg: string,title?: string): void;
  info(msg: string,title?: string): void;
  warning(msg: string,title?: string): void;
  error(msg: string,title?: string): void;
}