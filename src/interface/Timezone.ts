export interface Timezone {
  timezoneId: string;
  timezoneName: string;
  timezoneDisplayName: string;
  utcOffsetMinutes: number;
}

export interface TimezoneResponse {
  data: {
    success: boolean;
    message: string;
    data: Timezone[];
  };
}