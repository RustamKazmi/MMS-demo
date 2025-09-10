export interface UploadStatus {
  show: boolean;
  type: 'success' | 'danger' | 'warning' | 'info';
  message: string;
  icon: string;
}
