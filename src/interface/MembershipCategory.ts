export interface MembershipCategory {
  memberShipCategoryId: string;
  memberShipCategoryName: string;
  memberShipCategoryDetail: string;
  entranceFeeId: string;
  onlineSignupEnabled: boolean;
  entranceFeeName: string;
  badgeFilePath: string;
  isMemberShipCategoryActive: boolean;
  isMemberShipCategoryDeleted: boolean;
  memberShipCategoryCreatedBy: string;
  memberShipTypeIds: string[];
  memberShipCategoryCreatedAt: string;
  memberShipCategoryUpdatedBy: string;
  memberShipCategoryUpdatedAt: string;
}
export interface MembershipCategoryResponse {
  data: {
    success: boolean;
    message: string;
    // data: PaginatedDesignationData | Designation[];
    data: MembershipCategory;
  };
}
export interface MembershipCategoryResponseList {
  data: {
    success: boolean;
    message: string;
    // data: PaginatedDesignationData | Designation[];
    data: MembershipCategory[];
  };
}
export interface EditMemberShipCategoryAPiResponse {
  success: boolean;
  message: string;
  data: MembershipCategory;
}

export interface DeleteMemberShipCategoryApiResponse {
  data: {
    success: Boolean;
    message: string;
    data: Boolean;
  };
}
