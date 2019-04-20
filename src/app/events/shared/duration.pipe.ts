import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case 1: return 'Half Hour'
      case 2: return '1 Hour'
      case 3: return 'Half Day'
      case 4: return 'Full Hour'
      default: return value.toString();
    }
  }

}
