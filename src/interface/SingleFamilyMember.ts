
export interface SingleFamilyMember {
  memberFamilyMemberId: string;
  firstName: string;
  lastName: string;
  familyMemberNumber?: string;
  familyMemberId: string;
  relationshipId: string;
  relationship: string;
  titleId: string;
  genderId: string;
  gender : string;
  dob: string | Date;
  email: string;
  phoneNumber: string;
  cellNumber: string;
  familyMemberPaymentResponsibility?: string;
}

export interface getSingleMemberResponse {
data : {
       success : boolean;
        message : string;
        data : SingleFamilyMember
    
}
}