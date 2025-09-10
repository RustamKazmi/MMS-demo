export interface SaveOrganizationPrimaryContact { 
    organizationId: string;
    titleId : string;
    organizationContactFirstName : string;
    organizationContactLastName : string;
    organizationContactEmailAddress : string;
    address : {
        address1 : string;
        address2 : string;
        address3 : string;
        countryId : string;
        stateId : string;
        cityId : string;
        postalCode: number;
        mainPhoneNumber : string;
        mainPhoneExtension : number;
        mainPhone2Number? : string;
        mainPhone2Extention? : number;
        cellPhone : string;
        faxNumber : string;
        googleMapAddressUrl : string;
    }
}

export interface SaveOrganizationPrimaryContactResponse { 
     success: boolean;
    message: string;
    data: SaveOrganizationPrimaryContact
}