export interface DepartmentRow {
  id: number;
  name: string;
  head: string;
  budget: number;
  [key: string]: number | string;
}
