import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: any, temperature: number ): number {
    let  calculated : number ;
    calculated = 27 + temperature;
    return calculated;
  }
;
}
