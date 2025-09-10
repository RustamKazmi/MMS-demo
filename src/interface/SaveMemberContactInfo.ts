export interface SaveMemberContactInfo {
    memberId: string;
    address1: string;
    address2: string;
    countryId: string;
    stateId: string;
    cityId: string;
    postalCode: number;
    mainPhoneNumber: string;
    cellPhone: string;
}

export interface SaveMemberContactInfoResponse {
    success : boolean;
    message : string;
    data : SaveMemberContactInfo;
}