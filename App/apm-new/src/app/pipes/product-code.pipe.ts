import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'productcode' })

export class ProductCodeCustomPipe implements PipeTransform {
  transform(productCode: string, replaceChar?: string): string {

    const regex = replaceChar ? new RegExp(replaceChar, 'gi') : new RegExp(/\W/, 'g')

    return productCode.replace(regex, ' ')
  }
}