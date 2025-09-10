export interface SaveFamilyMember {
  primaryMemberId: string;
  userId: string | null;
  membershipCategoryId: string | null;
  membershipTypeId: string | null;
  firstName: string;
  lastName: string;
  familyMemberNumber: string;
  familyMemberId : string;
  relationId: string;
  titleId: string;
  genderId: string;
  dateOfBirth: string | Date;
  email: string;
  phoneNumber: string;
  cellNumber: string;
  paymentResponsibility: string;
  organizationId: string | null;
  membershipStartDate?: string;
  membershipExpiryDate?: string;
  memberJoinedDate?: string;
  memberLastRenewalDate?: string;
  memberElectionDate?: string;
  isSelfRegistered: boolean;
  memberCreatedBy: string | null;
  memberCreatedAt: string | null;
}

export interface SaveFamilyMemberResponse {
        success : boolean;
        message : string;
        data : SaveFamilyMember
    
}


