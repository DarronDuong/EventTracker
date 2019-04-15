import { Injectable } from '@angular/core';
declare let toastr : any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  success(message:string, title?: String){
    toastr.success(message,title);
  }
  info(message:string, title?: String){
    toastr.info(message,title);
  }
  warning(message:string, title?: String){
    toastr.warning(message,title);
  }
  error(message:string, title?: String){
    toastr.error(message,title);
  }
}
