export interface EntranceFeeCategory {
  entranceFeeId: string;
  entranceFeeName: string;
  entranceFeeDetails: string;
  entranceFeeAmount: number;
}
export interface EntranceFeeApiResponse {
  data: {
    success: boolean;
    message: string;
    data: EntranceFeeCategory[];
  };
}
