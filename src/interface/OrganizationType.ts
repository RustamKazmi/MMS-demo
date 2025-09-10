export interface OrganizationType { 
                    organizationTypeId: string,
                    organizationTypeName: string,
                    organizationTypeDetails: string,
                    isOrganizationTypeActive: boolean,
                    isOrganizationTypeDeleted: boolean,
                    organizationTypeCreatedAt: string,
                    organizations: string,
}


export interface OrganizationTypeResponse { 
    data : {
        success : boolean;
        message : string;
        data : OrganizationType[];
    }
}
