import { FamilyRelation } from './FamilyRelation';

export interface FamilyRelationApiResponse {
  data: {
    Success: boolean;
    Message: string;
    Data: FamilyRelation[];
  };
}
