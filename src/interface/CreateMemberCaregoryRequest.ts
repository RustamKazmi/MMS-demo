export interface CreateMemberCaregoryRequest {
  memberShipCategoryId?: string;
  memberShipCategoryName: string;
  memberShipCategoryDetail: string;
  entranceFeeId: string;
  onlineSignupEnabled: boolean;
  badgeFilePath?: string;
  isMemberShipCategoryActive: boolean;
  isMemberShipCategoryDeleted: boolean;
  memberShipCategoryCreatedBy?: string;
  memberShipTypeIds: string[];
  memberShipCategoryCreatedAt?: string;
  memberShipCategoryUpdatedBy?: string;
  memberShipCategoryUpdatedAt?: string;
}
