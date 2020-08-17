import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {

    transform(items: any[], value, callback, reverse: boolean): unknown {
        if (!items || !callback) {
            return items;
        }

        items.sort((a: any, b: any) => {
            return callback(this.getNestedObject(a, value), this.getNestedObject(b, value));
        });

        if (reverse) {
            return items.reverse();
        }

        return items;
    }

    getNestedObject(o, s) {
        s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        s = s.replace(/^\./, '');           // strip a leading dot
        const a = s.split('.');
        for (let i = 0, n = a.length; i < n; ++i) {
            const k = a[i];
            if (k in o) {
                o = o[k];
            } else {
                return;
            }
        }
        return o;
    }

    public lexicographicSort(valueA, valueB): number {
        return valueA.localeCompare(valueB);
    }

    public booleanSort(valueA, valueB): number {
        if (valueA === valueB) {
            return 0;
        } else if (valueA && !valueB) {
            return 1;
        } else {
            return -1;
        }
    }

    public dateSort(valueA, valueB): number {
        if (valueA.getTime() === valueB.getTime()) {
            return 0;
        } else if (valueA.getTime() >= valueB.getTime()) {
            return 1;
        } else {
            return -1;
        }
    }

    public numberSort(valueA, valueB): number {
        if (valueA === valueB) {
            return 0;
        } else if (valueA > valueB) {
            return 1;
        } else {
            return -1;
        }
    }
}
