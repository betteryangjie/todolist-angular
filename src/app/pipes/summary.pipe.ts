import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): string {
    if (!value) {
      return ''
    }
    let actualLimit = (limit) ? limit : 20
    if (value.length <= actualLimit) {
      return value
    }
    return value.substr(0, actualLimit) + '...'
  }

}
