export interface States {
  stateId: string;
  stateName: string;
}
export interface StatesApiResponse {
  data: {
    success: boolean;
    message: string;
    data: States[];
  };
}
