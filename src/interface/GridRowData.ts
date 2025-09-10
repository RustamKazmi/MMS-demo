export interface DataRow {
  [key: string]: unknown;
}

export interface SortState {
  active: string;
  direction: 'asc' | 'desc' | '';
}

export interface DataSource {
  filteredData?: DataRow[];
  data: DataRow[];
  sort?: SortState;
}
