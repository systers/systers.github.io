import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class GetFirstWord implements PipeTransform
{
   
       transform(value: string, args: any[]): string | boolean
    {
        if (value === null) {return false;}
        return value.split(' ')[0];
    }
    
}