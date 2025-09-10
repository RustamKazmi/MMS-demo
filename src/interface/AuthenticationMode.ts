export interface AuthenticationMode {
  id: string;
  name: string;
}

export interface AuthenticationModeResponse {
  data: {
    success: boolean;
    message: string;
    data: AuthenticationMode[];
  };
}