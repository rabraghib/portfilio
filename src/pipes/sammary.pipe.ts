import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sammary'
})
export class SammaryPipe implements PipeTransform {

  transform(value: string , limit?:number , addedIfIsLarge?:boolean , add?:string): any {
    if (!value) return null;
    if (!limit) { limit = 50 }
    if (!add || !addedIfIsLarge || value.length <= limit) {
      return value.substr(0,limit);
    }
    return value.substr(0,limit) + add;
  }

}
