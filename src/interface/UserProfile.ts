export interface UserProfile {
  userId?: string;
  titleId: string;
  firstName: string;
  lastName: string;
  designationId: string;
  userEmail: string;
  phoneNumber: string;
  cellNumber: string;
}
export interface UserProfileApiResponse {
  data: {
    success: boolean;
    message: string;
    data: UserProfile[];
  };
}
