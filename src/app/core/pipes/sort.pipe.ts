import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(items: any[], value, callback, reverse: boolean): unknown {
        if (!items || !callback) {
            return items;
        }

        items.sort((a: any, b: any) => {
            return callback(a[value], b[value]);
        });

        if (reverse) {
            return items.reverse();
        }

        return items;
    }

}
