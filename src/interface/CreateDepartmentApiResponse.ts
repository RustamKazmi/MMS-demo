import { Department } from './department';

export interface CreateDepartmentResponse {
  success: boolean;
  message: string;
  data: Department;
}
