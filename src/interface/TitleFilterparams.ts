import { SortState } from '../services/sorting.service';

export interface TitleFilterparams {
  titleName?: string;
  titleCode?: string;
  isTitleActive?: boolean;
  titleCreatedAt?: string;
  titleCreatedBy?: string;
  titleCreatedTo?: string;
  sortState?: SortState;
  searchTerm?: string;
  pageNumber?: number; // Add pagination support
  pageSize?: number; // Add pagination support
}
