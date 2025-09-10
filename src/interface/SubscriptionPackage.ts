
export interface SubscriptionIncludes {
    includeTitle: string;
    includeDetail: string;
    iconUrl: string;

}

export interface SubscriptionPackage {
    subscriptionId: string;
    membershipCategorySubscriptionId: string;
    subscriptionCode: string;
    subscriptionName: string;
    subscriptionDetails: string;
    subscriptionPeriod: string;
    subscriptionPeriodDetail: string;
    subscriptionPrice: string;
    currencySymbol: string;
    currencyCode: string;
    subscriptionIncludes: SubscriptionIncludes[];
}


export interface SubscruiptionPackageApiResponse {
    data : {
        success: boolean;
    message: string;
    data: SubscriptionPackage[];
    }
}

export interface Benefit {
        benefitId : string;
        benefitName : string;
        benefitDetails : string;
        benefitIconUrl : string;
}

export interface SubscriptionPackageBenefit {
    membershipCategoryBenefitId : string;
    membershipCategoryId : string;
    benefitId : string;
    isMembershipCategoryBenefitActive : string;
    isMembershipCategoryBenefitDeleted : string;
    membershipCategoryBenefitIncludeCreatedAt : string;
    benefit : Benefit
}

export interface SubscriptionPackageBenefitResponse {
data : { 
    success : boolean;
    message : string;
    data : {
        memberShipCategoryId : string;
        memberShipCategoryName : string;
        memberShipCategoryDetail : string;
        entranceFeeId : string;
        onlineSignupEnabled : boolean;
        badgeFilePath : null | string;
        isMemberShipCategoryActive : boolean;
        isMemberShipCategoryDeleted : boolean;
        memberShipCategoryCreatedBy : string;
        memberShipCategoryCreatedAt : string;
        memberShipCategoryUpdatedBy : string;
        memberShipCategoryUpdatedAt : string;
        membershipCategoryBenefits : SubscriptionPackageBenefit[]
    }
}
}
