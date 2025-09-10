import { PaginatedSubscriptionData } from './pagination';

export interface Subscription {
  subscriptionId: string;
  subscriptionName: string;
  subscriptionDetails: string;
  subscriptionCode: string;
  isSubscriptionActive: boolean;
  isSubscriptionDeleted: boolean;
  subscriptionCreatedAt: string;
  subscriptionCreatedBy: string;
  subscriptionUpdatedAt: string;
  subscriptionUpdatedBy: string;
}

export interface SubscriptionResponse {
  data: {
    success: boolean;
    message: string;
    data: PaginatedSubscriptionData | Subscription[];
  };
}
export interface EditSubscriptionAPiResponse {
  success: boolean;
  message: string;
  data: Subscription;
}
