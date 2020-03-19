import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chnagecase',
  pure: true
})
export class ChnagecasePipe implements PipeTransform {

  transform(value: string, ...temps: any[]): any {
    console.log(value);

    let charas = value.toString().toLowerCase().split('');
    for (let i = 0; i < charas.length ; i += 2) {
      charas[i] = charas[i].toUpperCase();

    }
    return charas.join();
    console.log(charas.join());
  }

}

