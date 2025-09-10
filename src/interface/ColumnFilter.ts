export interface ColumnFilter {
  column: string;
  value: any;
  operator?:
    | 'contains'
    | 'equals'
    | 'startsWith'
    | 'endsWith'
    | 'greaterThan'
    | 'lessThan';
}

export interface ColumnFiltersState {
  [columnName: string]: any;
}
