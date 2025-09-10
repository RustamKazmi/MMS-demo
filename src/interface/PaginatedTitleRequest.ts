import { TitleFilterparams } from './TitleFilterparams';

export interface PaginatedTitleRequest extends TitleFilterparams {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
