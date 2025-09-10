import { DepartmentFilterParams } from './DepartmentFilterParams';

export interface PaginatedDepartmentRequest extends DepartmentFilterParams {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
