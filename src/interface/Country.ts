export interface Country {
  countryId: string;
  countryName: string;
  countryNativeName: string;
  countryDetails: string;
  countryIso2code: string;
  countryIso3code: string;
  countryPhoneCode: string;
  countryFlagUrl: string;
  isCountryActive: boolean;
  isCountryDeleted: boolean;
  countryCreatedAt: string;
  countryCreatedBy: string;
}
export interface CountryApiResponse {
  data: {
    success: boolean;
    message: string;
    data: Country[];
  };
}
