import { Department } from './department';

export interface CreateDepartmentRequest {
  departmentName: string;
  departmentDetails: string;
  departmentCode: string;
  isDepartmentActive?: boolean;
}

// new interface for API response:
