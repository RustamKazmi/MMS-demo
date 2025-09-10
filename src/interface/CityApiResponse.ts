export interface City {
  cityId: string;
  cityName: string;
}
export interface CityApiResponse {
  data: {
    success: boolean;
    message: string;
    data: City[];
  };
}
