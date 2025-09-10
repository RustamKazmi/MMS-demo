export interface CreateSubscriptionRequest {
  subscriptionId?: string;
  subscriptionName: string;
  subscriptionDetails: string;
  subscriptionCode: string;
  isSubscriptionActive: boolean;
}
