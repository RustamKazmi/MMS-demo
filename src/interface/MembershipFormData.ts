import { DependentSeat } from './DependentSeat';

export interface MembershipFormData {
  membershipTypeName: string;
  description: string;
  membershipModel: string;
  activeStatus: boolean;
  individualCount?: number;
  numberOfSeats?: string;
  unlimitedSeats?: boolean;
  organizationAffiliation?: string;
  dependentSeats?: DependentSeat[];
}
