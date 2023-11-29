import { ValueFormatterParams } from "ag-grid-community";

export default function dateValueFormatter(params: ValueFormatterParams) {
    if (params.value == null) return '';
    return new Date(params.value).toString();
  }