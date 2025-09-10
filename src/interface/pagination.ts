import { Currency } from './Currency';
import { Department } from './department';
import { MembershipCategory } from './MembershipCategory';
import { Title } from './Title';

export interface PaginationInfo {
  PageNumber?: number;
  PageSize?: number;
  TotalRecords?: number;
  TotalPages?: number;
  totalRecords?: number;
  totalPages?: number;
  pageSize?: number;
  pageNumber?: number;
}

export interface PaginationData {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: number[];
}

export interface PaginationEvent {
  pageIndex: number;
  pageSize: number;
  length: number;
}
export interface paginatedMemberShipCategoryData {
  items: MembershipCategory[];
  pagination: PaginationInfo;
}

export interface PaginatedDepartmentData {
  // small-case them to match to the latest api response

  items: Department[];     
  pagination: PaginationInfo;
}

export interface PaginatedDepartmentData {

}

export interface PaginatedDesignationData {
  Items: any[];
  Pagination: PaginationInfo;
}

export interface PaginatedTitleData {
  // small-case them to match to the latest api response
  items: Title[];
  pagination: PaginationInfo;
}
export interface PaginatedSubscriptionData {
  Items: any[];
  Pagination: PaginationInfo;
}
export interface PaginatedCurrencyData {
  items: Currency[];
  pagination: PaginationInfo;
}
export interface ApiResponse<T> {
  data: {
    Success: boolean;
    Message: string;
    Data: T;
  };
}
