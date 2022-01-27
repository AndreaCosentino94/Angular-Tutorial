import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitstring'
})
export class LimitstringPipe implements PipeTransform {

  transform(value: string, args: any): string {//questo è dinamico, se nell'html imposti il limite di caratteri, spunteranno 3 puntini
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
    //return value.substring(0, parseInt(args)) + '...'; questo è statico, i puntini restano sempre, si possono togliere
  }

}
