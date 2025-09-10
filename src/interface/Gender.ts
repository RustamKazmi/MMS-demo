export interface Gender {
    genderId: string;
    genderName: string;
    genderDetails: string;
    genderCreatedAt: string;
}

export interface GenderResponse {
    data : {
        success : boolean; 
        message: string;
        data : Gender[];
    }
}