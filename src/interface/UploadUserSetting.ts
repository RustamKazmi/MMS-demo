export interface UploadUserSetting {
  userId: string;
  languageId: string;
  timeZoneId: string;
  isDetectTimezoneAutomatically: boolean;
  isSendEmailNotifications: boolean;
  isUpdatesAndPromotions: boolean;
  currencyId: string;
  themeId: string;
  isTwoFactorEnabled: boolean;
  userAuthenticationModeId: string;
  dateFormatId: string;
}

export interface UploadUserSettingResponse {
  data: {
    success: boolean;
    message: string;
    data: UploadUserSetting;
  };
}