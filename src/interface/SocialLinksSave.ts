export interface SocialLinksSave  {
platform: string;
url: string;
socialMediaPlatformId:string;
entitySocialMediaId : string;

 }


 export interface SocialLinksSaveResponse {
   success : boolean;
   message : string;
   data : SocialLinksSave[];
 }