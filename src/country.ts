import * as countries from "./data/countries.json";

export type CountryPhoneType = { name: string; code: string };
export type CountryCodeType = { name: string; phone: string | number };
export type CountriesByPhoneType = Record<string, CountryPhoneType>;
export type CountriesByCodeType = Record<string, CountryCodeType>;

/**
 * @type {CountriesByPhoneType}
 */
const countriesByPhone: CountriesByPhoneType = {};

/**
 * @type {CountriesByCodeType}
 */
const countriesByCode: CountriesByCodeType = countries;

/**
 * Set countriesByPhone with a key-value object
 * having as key the phone prefix of the country
 * @returns {void}
 */
const initCountriesByPhone = (): void => {
  /* istanbul ignore next */
  if (Object.keys(countriesByPhone).length !== 0) return;

  for (const prop in countriesByCode) {
    const country: CountryCodeType = countriesByCode[prop];
    countriesByPhone[country.phone] = { name: country.name, code: prop };
  }
};

/**
 *
 * @param {string} code
 * @returns {CountryCodeType}
 */
export const getCountryByCode = (code: string): CountryCodeType => {
  return countriesByCode[code];
};

/**
 *
 * @param {string|number} phone
 * @returns {CountryPhoneType}
 */
export const getCountryByPhone = (phone: string | number): CountryPhoneType => {
  return countriesByPhone[phone];
};

initCountriesByPhone();
