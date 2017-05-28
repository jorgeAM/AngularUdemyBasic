import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'conversor'})
export class ConversorPipe implements PipeTransform {
  transform(value, por) {
    let a = parseInt(value)
    let b = parseInt(por)
    let result = a*b

    return "La multiplicacion es "+ result.toString()
  }
}