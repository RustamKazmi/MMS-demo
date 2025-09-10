export interface CreateOrganization { 
    organizationId?: string;
    organizationDetails? : string;
    organizationGoogleMapEmbedCode? : string;
    organizationName: string;
    organizationWebsiteUrl?: string;
    isOrganizationActive: boolean;
    isOrganizationDeleted: boolean;
    organizationCreatedAt: string;
    organizationTypeCreatedAt: string;
    organizationTypeId: string;
}

export interface CreateOrganizationResponse { 
    success : boolean;
    message : string;
    data : CreateOrganization
}