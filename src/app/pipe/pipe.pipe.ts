import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(ary?: any, fn: Function = (a,b) => a > b ? 1 : -1): any {
    return ary.sort(fn);
  }
}
