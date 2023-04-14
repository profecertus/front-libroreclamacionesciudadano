import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padnumber'
})
export class PadnumberPipe implements PipeTransform {

  transform(value: string, digitos: number): unknown {
    return  (Array(digitos + 1).join('0') + value).slice(-digitos);
  }

}
