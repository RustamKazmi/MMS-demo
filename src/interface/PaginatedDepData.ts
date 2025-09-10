import { Department } from './department';

export interface PaginatedDepartmentData {
  departments: Department[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}
