import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activado:boolean = true): string {
        
    if (activado) {
      value= value.replace(value,'*********');
    }else{
      value= value;
    }
    return value;
  }

}
