export interface CreateDesignationRequest {
  designationTitle: string;
  designationCode: string;
  designationDetails: string;
  isDesignationActive?: boolean;
}
