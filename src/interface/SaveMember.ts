export interface SaveMember {
    organizationId : string | null;
    memberNo : string | undefined;
    isSelfRegistered: boolean | undefined;
    isPrimary : boolean | undefined;
    memberId?: string | null;
    memberFirstName : string | undefined;
    memberLastName : string | undefined;
    membershipTypeId : string | undefined;
    membershipCategoryId : string | undefined;
    titleId : string | undefined;
    memberDateOfBirth : string | undefined;
    genderId : string | undefined;
    memberAlternateEmailAddress : string | undefined;
    memberEmailAddress: string;
    }

    

    export interface SaveMemberResponse {
            success : boolean;
            message : string;
            data : SaveMember;
    }