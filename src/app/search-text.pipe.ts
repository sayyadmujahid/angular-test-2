import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {

  transform(data: any,searchText:string): any {
    if(searchText==undefined){
    return data
    }
    return data.filter((text)=>{
      return text.title.toLowerCase().match(searchText.toLowerCase());
    })
  }

}
