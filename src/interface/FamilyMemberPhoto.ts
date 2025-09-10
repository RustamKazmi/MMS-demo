export interface FamilyMemberPhoto {
    memberFamilyMemberId: string;
    familyMemberPhotoUrl?: string;
    familyMemberId: string;
}

export interface FamilyMemberPhotoResponse {
    data : {
        message : string,
       success : boolean ,
       data : FamilyMemberPhoto[],
    }
}


export interface SingleFamilyMemberPhotoResponse {
    data : {
        message : string,
       success : boolean ,
       data : FamilyMemberPhoto,
    }
}