export interface MembershipCategoryProfile{
 membershipCategoryId: string;
  membershipCategoryName: string;
  membershipCategoryDetail: string;
}

export interface MembershipCategoryProfileResponse {
  data: {
    success: boolean;
    message: string;
    data: MembershipCategoryProfile[];
  };
}