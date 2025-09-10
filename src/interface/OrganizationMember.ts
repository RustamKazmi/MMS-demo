export interface OrganizationMember {
  name: string;
  email: string;
  cellNumber: string;
  phoneNumber: string;
  address1: string;
  address2: string;
  city: string;
  stateProvince: string;
  postalCode: string;
  country: string;
  isPrimary: string;
}

export interface OrganizationMembersApiRespone {
  data: {
    success: boolean;
    message: string;
    data: OrganizationMember[];
  };
}
