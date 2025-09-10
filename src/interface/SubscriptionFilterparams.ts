import { SortState } from '../services/sorting.service';

export interface SubscriptionFilterparams {
  subscriptionName?: string;
  subscriptionCode?: string;
  subscriptionPeriodName?: string;
  isSubscriptionActive?: boolean;
  subscriptionCreatedAt?: string;
  subscriptionCreatedBy?: string;
  subscriptionCreatedTo?: string;
  sortState?: SortState;
  searchTerm?: string;
  pageNumber?: number; // Add pagination support
  pageSize?: number; // Add pagination support
}
