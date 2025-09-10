
export interface Theme {
  id: string;
  name: string;
}

export interface ThemeResponse {
  data: {
    success: boolean;
    message: string;
    data: Theme[];
  };
}