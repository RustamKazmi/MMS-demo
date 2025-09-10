export interface OrganizationPrimaryContact {
  name: string;
  email: string;
  cellNumber: string;
  phoneNumber: string;
  faxNumber: string;
  address1: string;
  address2: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  country: string;
}

export interface OrganizationPrimaryContactResponse {
  data: {
    success: boolean;
    message: string;
    data: OrganizationPrimaryContact;
  };
}
