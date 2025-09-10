import { MembershipModel } from './MembershipModel';

export interface MembershipModelApiResponse {
  data: {
    Success: boolean;
    Message: string;
    Data: MembershipModel[];
  };
}
