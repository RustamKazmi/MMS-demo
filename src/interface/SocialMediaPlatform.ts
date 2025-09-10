export interface SocialMediaPlatform {
    message: string;
    socialMediaPlatformIconUrl?: string;
    socialMediaPlatformId: string;
    socialMediaPlatformName: string;
    socialMediaPlatformIconPath: string;
    isSocialMediaPlatformActive: string;
    isSocialMediaPlatformDeleted: string;
    socialMediaPlatformCreatedAt: string;
    memberSocialMedia: [];
    organizationSocialMedia: [];
}

export interface SocialMediaPlatformResponse {
    data: {
        success: boolean;
        message: string;
        data: SocialMediaPlatform[];
    }
}