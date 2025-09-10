export interface Organization {
  organizationName: string;
  registrationKey: string;
  linkedChurch: null;
  timezone: string;
  language: string;
  dateFormat: string;
  currency: string;
  billingEmail: string;
  billingFrequency: string;
  taxNumber: string;
}

export interface OrganizationApiResponse {
  data: {
    success: boolean;
    message: string;
    data: Organization;
  };
}
