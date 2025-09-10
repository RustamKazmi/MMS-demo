export interface uploadPhoto {
    success: boolean;
    message : string;
    imageUrl : string;
}


export interface uploadPhotoResponse {
    data: {
        success: boolean;
        message: string;
        data : uploadPhoto;
    }
}