import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customcurrency' })
export class CurrencyCustomPipe implements PipeTransform {
  transform(
    value: number,
    currencyType?: string,
    roundedDecimal: number = 1
  ): string {
    let decimalsRoundTo = roundedDecimal;

    if (roundedDecimal < 0) {
      decimalsRoundTo = 0;
    }

    return currencyType
      ? `${currencyType}${value.toFixed(decimalsRoundTo)}`
      : value.toFixed(decimalsRoundTo);
  }
}
