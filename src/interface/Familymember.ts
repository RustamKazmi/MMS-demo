export interface Familymember {
  memberFamilyMemberId: string;
  familyMemberId: string;
  firstName: string;
  lastName: string;
  relationshipId: string;
  relationship: string;
  genderId: string;
  gender: string;
  dob: string;
  email?: string;
  phoneNumber?: string;
}

export interface FamilymemberResponse {
  data: {
    success: boolean;
    message: string;
    data: Familymember[];
  };

}

  export interface SingleFamilymemberResponse {
  data: {
    success: boolean;
    message: string;
    data: Familymember;
  };

}
