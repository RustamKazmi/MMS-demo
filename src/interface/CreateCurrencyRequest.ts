export interface CreateCurrencyRequest {
  currencyId?: string;
  currencyName: string;
  currencyCode: string;
  currencySymbol: string;
  currencyDetails: string;
  currencyDecimalPlaces: number;
  countryId: string;
  isDefaultCurrency: boolean;
  isCurrencyActive: boolean;
  isCurrencyDeleted: boolean;
  currencyCreatedAt?: string;
  currencyCreatedBy?: string;
}
