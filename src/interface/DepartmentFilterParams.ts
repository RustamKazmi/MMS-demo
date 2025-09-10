import { SortState } from '../services/sorting.service';

export interface DepartmentFilterParams {
  departmentName?: string;
  departmentCode?: string;
  departmentDetails? : string;
  isDepartmentActive?: boolean;
  createdById?: string;
  createdFromDate?: string;
  createdToDate?: string;
  sortState?: SortState;
  searchTerm?: string;
  pageNumber?: number; // Add pagination support
  pageSize?: number; // Add pagination support
}
