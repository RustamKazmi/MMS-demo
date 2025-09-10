export interface UpdateFamilyMember {
familyMemberId: string;
firstName: string;
lastName: string;
email: string;
relationId: string;
phone: string;

}

export interface UpdateFamilyMemberPayload{
familyMemberId: string;
firstName: string;
lastName: string;
email: string;
phoneNumber: string;
cellNumber: string;
titleId: string;
relationId: string;
familyMemberNumber: string;
genderId: string;
dateOfBirth: string;
paymentResponsibility: string;
}

export interface UpdateFamilyMemberResponse {
    data : {
        success : boolean;
        message : string;
        data : UpdateFamilyMember;
    }
}