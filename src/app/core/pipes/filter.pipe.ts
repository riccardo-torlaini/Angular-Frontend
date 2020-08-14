import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterPipe',
    pure: false
})
export class FilterPipe implements PipeTransform {

    transform(items: any[], stringToFilterOn) {
        if (!items) {
            return items;
        }
        console.log(items);

        return items.filter(item => (item as string).includes(stringToFilterOn));
    }
}
