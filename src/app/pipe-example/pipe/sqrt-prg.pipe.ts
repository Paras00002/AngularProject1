import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrtPrg'
})
export class SqrtPrgPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
