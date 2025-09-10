// date-format.model.ts

export interface DateFormat {
  dateFormatId: string;
  dateFormatString: string;
  dateFormatDetails: string;
  dateFormatSampleOutput: string;
}

export interface DateFormatResponse {
  data: {
    success: boolean;
    message: string;
    data: DateFormat[];
  };
}
