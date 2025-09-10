export const APP_CONSTANTS = {
  PREVIEW_TEXT_MAX_LENGTH: 20,
  URL_PATTERN: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
  US_PHONE_REGEX: /^(\+1\s?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})[\s.-]?[0-9]{3}[\s.-]?[0-9]{4}$/,
  HTTPS_URL_PATTERN: /^(?:(?:https?:\/\/)|(?:www\.))(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+com(?:\/[^\s]*)?$/i,
  US_FAX_PATTERN: /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/
};
