export interface SaveOrganizationMember {
userId : string;
membershipCategoryId : string;
membershipTypeId : string;
firstName : string;
lastName : string;
titleId : string;
dateOfBirth : string;
genderId : string;
email : string;
fax : string;
phoneNumber : string;
cellNumber : string;
countryId : string;
cityId : string;
stateOrProvinceId : string;
zipCodeId : string;
address1 : string;
address2 : string;
membershipStartDate : string;
membershipExpiryDate : string;
memberJoinedDate : string;
memberLastRenewalDate : string;
memberElectionDate : string;
alternateEmail : string;
postalCode : number;
mainPhone2Number : string;
mainPhone2Extention : number;
googleMapAddressUrl : string;
mainPhoneExtension : number;
memberNo : string;
memberStatusId : string;
address3 : string;
}


export interface SaveOrganizationMemberResponse {
    success: boolean;
    message: string;
    data: SaveOrganizationMember;
}

export interface SaveOrganizationMemberFailure {
  error: unknown;
  payload: SaveOrganizationMember;
}

export type SaveResult = SaveOrganizationMemberResponse | SaveOrganizationMemberFailure;
