import { DesignationFilterparams } from './DesignationFilterparams';

export interface PaginatedDesignationRequest extends DesignationFilterparams {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
