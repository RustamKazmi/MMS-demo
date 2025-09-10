import { PaginatedDesignationData } from './pagination';

export interface Designation {
  designationId: string;
  designationTitle: string;
  designationCode: string;
  designationDetails: string; // ✅ FIXED TYPO
  isDesignationActive: boolean;
  isDesignationDeleted: boolean;
  designationCreatedAt: string;
  designationCreatedBy: string;
  designationUpdatedAt: string;
  designationUpdatedBy: string;
}
// export interface DesignationResponse {
//   data: {
//      Success: boolean;
//      Message: string;
//      // Data: Department[];
//      Data: PaginatedDesignationData | Designation[];
//    };
// }
export interface DesignationResponse {
  data: {
    success: boolean;
    message: string;
    data: PaginatedDesignationData | Designation[];
  };
}
export interface EditDesignationAPiResponse {
  success: boolean;
  message: string;
  data: Designation;
}
