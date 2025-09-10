import { SortState } from './GridRowData';

export interface MemberShipCategoryFilterparams {
  memberShipCategoryName?: string;
  memberShipCategoryDetail?: string;
  entranceFeeName?: string;
  isMemberShipCategoryActive?: boolean;
  memberShipCategoryType?: string;
  createdById?: string; // if you need to filter by creator
  memberShipCategoryCreatedAt?: string; // from date
  memberShipCategoryCreatedTo?: string;
  sortState?: SortState;
  searchTerm?: string;
  pageNumber?: number; // Add pagination support
  pageSize?: number; // Add pagination support
}
