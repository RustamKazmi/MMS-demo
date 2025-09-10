export interface SocialLink {
  platform: string;
  iconUrl: string;
  profileUrl: string;
}

export interface SocialLinksResponse {
  data: {
    success: boolean;
    message: string;
    data: SocialLink[];
  };
}
