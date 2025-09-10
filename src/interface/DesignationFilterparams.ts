import { SortState } from '../services/sorting.service';

export interface DesignationFilterparams {
  designationTitle?: string;
  designationCode?: string;
  isDesignationActive?: boolean;
  createdById?: string; // if you need to filter by creator
  designationCreatedAt?: string; // from date
  designationCreatedTo?: string;
  sortState?: SortState;
  searchTerm?: string;
  pageNumber?: number; // Add pagination support
  pageSize?: number; // Add pagination support
}
