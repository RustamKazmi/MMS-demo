export interface MemberContactInfo {
  titleId: string;
  title: string;
  genderId: string;
  gender: string;
  dob: string;
  email: string;
  alternativeEmail: string;
  phoneNumber: string;
  cellNumber: string;
  address1: string;
  address2: string;
  postalCode: string;
  cityId: string;
  city: string;
  stateId: string;
  state: string;
  countryId: string;
  country: string;
}

export interface MemberContactInfoResponse {
  data: {
    success: boolean;
    message: string;
    data: MemberContactInfo;
  };
}
