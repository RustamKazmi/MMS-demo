export interface GetMembership {
  membershipTypeId: string;
  membershipTypeName: string;
  membershipTypeDetails: string;
  isMembershipTypeActive: boolean;
}
export interface GetMembershipApiResponse {
  data: {
    success: boolean;
    message: string;
    data: GetMembership[];
  };
}
