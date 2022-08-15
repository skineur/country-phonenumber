import {
  phoneNumberParser,
  getCountryCodeForRegionCode,
  getRegionCodeForCountryCode,
  getSupportedCallingCodes,
  getSupportedRegionCodes,
  getExample
} from "./../src/index";

describe("general unit test", (): void => {
  test("parse phone and get region name test 1", () => {
    const phone = "+237699999999";
    const regionName = "Cameroon";
    const pnp = phoneNumberParser(phone);
    const actual = pnp.getRegionName();
    expect(regionName).toBe(actual);
  });

  test("parse phone and get region name test 2", (): void => {
    const phone = "+33666666666";
    const regionName = "France";
    const pnp = phoneNumberParser(phone);
    const actual = pnp.getRegionName();
    expect(regionName).toBe(actual);
  });

  test("get country code for region", (): void => {
    const regionCode = "CM";
    const countryCode = 237;
    const actual = getCountryCodeForRegionCode(regionCode);
    expect(actual).toBe(countryCode);
  });

  test("get region code for country code", (): void => {
    const regionCode = "CM";
    const countryCode = 237;
    const actual = getRegionCodeForCountryCode(countryCode);
    expect(actual).toBe(regionCode);
  });

  test("get supported calling code", (): void => {
    const actual = getSupportedCallingCodes();
    expect(actual).toContain(237);
  });

  test("get supported region code", (): void => {
    const actual = getSupportedRegionCodes();
    expect(actual).toContain("CM");
  });

  test("get example phone number", (): void => {
    const actual = getExample('CM').getNumber();
    expect(actual).toMatch(/^\+237/)
  })
});
