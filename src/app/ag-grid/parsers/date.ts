import { ValueParserParams } from 'ag-grid-community';

export default function dateValueParser(params: ValueParserParams) {
  return new Date(params.newValue);
}