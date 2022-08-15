/* istanbul ignore next */
import PhoneNumber, {
  parsePhoneNumber,
  getCountryCodeForRegionCode,
  getRegionCodeForCountryCode,
  getSupportedCallingCodes,
  getSupportedRegionCodes,
  getExample,
} from "awesome-phonenumber";
import { getCountryByCode } from "./country";

declare module "awesome-phonenumber" {
  interface PhoneNumber {
    getRegionName: () => string;
  }
}

/**
 * Parse phonenumber
 * @param {string} phone
 * @param {string} regionCode
 * @returns {PhoneNumber}
 */
export function phoneNumberParser(
  phone: string,
  regionCode?: string
): PhoneNumber {
  const ppn = parsePhoneNumber(phone, regionCode);
  /* istanbul ignore next */
  ppn.getRegionName = () => getCountryByCode(ppn.getRegionCode())?.name;
  return ppn;
}


export {
  getCountryCodeForRegionCode,
  getRegionCodeForCountryCode,
  getSupportedCallingCodes,
  getSupportedRegionCodes,
  getExample,
};
