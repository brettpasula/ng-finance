import { ValueParserParams } from 'ag-grid-community';

export default function numberValueParser(params: ValueParserParams) {
  return Number(params.newValue);
}
