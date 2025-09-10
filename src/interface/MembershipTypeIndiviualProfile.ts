
export interface MembershipTypeIndiviualProfile{
 membershipTypeId: string;
  membershipTypeName: string;
  membershipTypeDetail: string;
  numberofSeats: string;
  hasDependents: string;
}
export interface MembershipTypeIndiviualProfileResponse {
  data: {
    success: boolean;
    message: string;
    data: MembershipTypeIndiviualProfile[];
  };
}