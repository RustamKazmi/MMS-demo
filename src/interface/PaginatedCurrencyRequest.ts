import { CurrencyFilterparams } from './CurrencyFilterparams';
import { TitleFilterparams } from './TitleFilterparams';

export interface PaginatedCurrencyRequest extends CurrencyFilterparams {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
