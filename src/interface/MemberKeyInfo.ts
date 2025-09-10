export interface MemberKeyInfo {
  fullName: string;
  firstName: string;
  lastName: string;
  membershipTypeId: string;
  membershipType: string;
  membershipCategoryId: string;
  membershipCategory: string;
  memberStatus: string;
  subscriptionPeriod: string;
  joinedDate: string;
  electionDate: string;
  renewalDate: string;
}

export interface MemberKeyInfoResponse {
  data: {
    success: boolean;
    message: string;
    data: MemberKeyInfo;
  };
}
