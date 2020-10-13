import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customReverse'
})
export class CustomReversePipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
  transform(value: string): string {
    let newStr: string = "";
    for (var i = value.length - 1; i >= 0; i-- ) {
      newStr += value.charAt(i);
    }
    return newStr;
  }
}
