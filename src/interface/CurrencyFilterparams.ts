import { SortState } from './GridRowData';

export interface CurrencyFilterparams {
  currencyName?: string;
  currencyCode?: string;
  isCurrencyActive?: boolean;
  currencyCreatedBy?: string; // if you need to filter by creator
  currencyCreatedAt?: string; // from date
  currencyDetails?: string;
  currencySymbol?: string;
  sortState?: SortState;
  searchTerm?: string;
  pageNumber?: number; // Add pagination support
  pageSize?: number; // Add pagination support
}
