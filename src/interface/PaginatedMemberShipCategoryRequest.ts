import { MemberShipCategoryFilterparams } from './MembershipCategoryFilterparams';

export interface PaginatedMemberShipCategoryRequest
  extends MemberShipCategoryFilterparams {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
