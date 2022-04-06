import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'currency'})
export class currencyPipe implements PipeTransform {
    public transform(value: number, lacale: string): string {
        return value.toLocaleString(lacale);
    }
 }

