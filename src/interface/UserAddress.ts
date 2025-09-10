export interface UserAddress {
  countryId: string;
  stateId: string;
  cityId: string;
  postalCode: string;
  address1: string;
  address2: string;
}
export interface UserAddressApiResponse {
  data: {
    success: boolean;
    message: string;
    data: UserAddress[];
  };
}
