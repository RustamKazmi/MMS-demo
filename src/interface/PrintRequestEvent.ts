import { GridColumn } from './GridColumn';
import { GridDataItem } from './GridDataItem';

export interface PrintRequestEvent {
  data: GridDataItem[];
  columns: GridColumn[];
  title: string;
}
