export interface SaveMemberPhoto {
    success: boolean;
    message : string;
    imageUrl : string;
}


export interface SaveMemberPhotoResponse {
    data: {
        success: boolean;
        message: string;
        data : SaveMemberPhoto;
    }
}