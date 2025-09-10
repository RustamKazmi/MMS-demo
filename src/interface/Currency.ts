import { PaginatedCurrencyData, PaginatedDesignationData } from './pagination';

export interface Currency {
  currencyId: string;
  currencyName: string;
  currencyCode: string;
  currencySymbol: string;
  currencyDetails: string;
  currencyDecimalPlaces: number;
  countryId: string;
  isDefaultCurrency: boolean;
  isCurrencyActive: boolean;
  isCurrencyDeleted: boolean;
  currencyCreatedAt: string;
  currencyCreatedBy: string;
}

export interface CurrencyResponse {
  data: {
    success: boolean;
    message: string;
    data: PaginatedCurrencyData | Currency[];
  };
}

export interface CurrencyAPiResponse { 
  data : {
    success : boolean;
    message : string;
    data : Currency[];
  }
}

export interface EditCurrencyAPiResponse {
  success: boolean;
  message: string;
  data: Currency;
}
