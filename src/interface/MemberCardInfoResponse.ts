export interface MemberCardInfo {
  memberId: string;
  memberCardNumber: string;
  memberName: string;
  memberCode: string;
  memberCardType: string;
  qrCodeUrl: string;
  validFrom: string;
  validTo: string;
  organizationName: string;
  organizationAddress: string;
  organizationPhone: string;
}

export interface MemberCardInfoResponse {
  data: {
    success: boolean;
    message: string;
    data: MemberCardInfo;
  };
}
