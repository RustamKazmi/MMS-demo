import { SubscriptionFilterparams } from './SubscriptionFilterparams';

export interface PaginatedSubscriptionRequest extends SubscriptionFilterparams {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}
