import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[],propName: string, filterString: String): any {
    if (!items) return [];
    return items.filter(item => item[propName] === filterString);
  }

}
