import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixNom'
})
export class PrefixNomPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return "Nom: "+value;
  }

}
