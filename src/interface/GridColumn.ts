export interface GridColumn {
  name: string; // Internal column name (matches data property)
  displayName: string; // Display name in header
  sortable?: boolean; // Whether column is sortable
  filterable?: boolean; // Whether column is filterable
  type?:
    | 'text'
    | 'badge'
    | 'number'
    | 'date'
    | 'boolean'
    | 'status-toggle'
    | 'toggle'; // Column data type
  width?: string; // Optional column width
  maxWidth?: string;
  customClasses?: (item: any) => string; // Function to return custom CSS classes
  customFormatter?: (value: any, item?: any) => string; // Function to format the cell value
  hideInExport?: boolean;
  hideInPrint?: boolean; // Added for print control

  // New filter properties

  filterType?: 'text' | 'select' | 'date' | 'boolean';
  filterPlaceholder?: string;
  filterOptions?: { value: any; label: string }[];
  filterWidth?: string;
}
