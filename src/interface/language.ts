export interface Language {
  languageId: string;
  languageName: string;
  languageCode: string;
  isDefaultLanguage: boolean;
}

export interface LanguageResponse {
  data: {
    success: boolean;
    message: string;
    data: Language[];
  };
}
