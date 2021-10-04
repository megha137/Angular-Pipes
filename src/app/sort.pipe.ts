import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], args?: any): any[] {
    if (args=="prodName")
    {
      return value.sort((a:any,b:any) => {
        if(a.prodName<b.prodName)
        return -1;
        else if(a.prodName>b.prodName)
        return 1;
        else
        return 0;
      });
    }
    else if(args =="prodPrice")
    {
      return value.sort((a: any, b:any) => {
        if(a.prodPrice<b.prodPrice)
        return -1;
        else if(a.prodPrice > b.prodPrice)
        return 1;
        else 
        return 0;
      });
    }
    return value;
  }
}
