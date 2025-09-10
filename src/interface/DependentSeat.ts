export interface DependentSeat {
  id: string;
  dependentRelation: string;
  otherRelationName?: string;
  minAge?: number;
  maxAge?: number;
}
