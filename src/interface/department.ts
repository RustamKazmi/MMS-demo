import { GridDataItem } from './GridDataItem';
import { PaginatedDepartmentData } from './pagination';

export interface Department extends GridDataItem {
  departmentId: string;
  departmentName: string;
  departmentDetails: string; // add the departmentDetails to match to the latest filter api response
  departmentCode: string;
  isDepartmentActive: boolean;
  isDepartmentDeleted: boolean;
  departmentCreatedAt: string;
  createdAt?: string;
  departmentCreatedBy: string;
  departmentUpdatedAt: string;
  departmentUpdatedBy: string;
}

// new interface for API response:
export interface DepartmentApiResponse {
  // small-case the success and message to match to the latest api response
  data: {
    success: boolean;
    message: string;
    // Data: Department[];
    data: PaginatedDepartmentData | Department[];
  };
}
export interface EditDepartmentAPiResponse {
  Success: boolean;
  Message: string;
  data: Department;
}
export interface DepartmentFilterResponse {
  success: boolean;
  message: string;
  data: Department[];
}
