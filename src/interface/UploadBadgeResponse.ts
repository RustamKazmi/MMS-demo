export interface BadgeUploadData {
  imageUrl: string;
}
export interface UploadBadgeResponse {
  success: boolean;
  message: string;
  data: BadgeUploadData;
}
