import { ValueFormatterParams } from "ag-grid-community";

export default function currencyValueFormatter(params: ValueFormatterParams) {
    if (params.value == null) return '';
    const canadianCurrencyFormatter = new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
    });
    return canadianCurrencyFormatter.format(params.value);
  }