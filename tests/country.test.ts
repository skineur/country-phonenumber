import { getCountryByCode, getCountryByPhone } from "./../src/country";

describe("country unit test", (): void => {
  test("get country by code", (): void => {
    const code = "CM";
    const country = { name: "Cameroon", phone: 237 };
    const actual = getCountryByCode(code);

    expect(actual).toEqual(country);
  });

  test("get country by phone", (): void => {
    const phone = 33;
    const country = { name: "France", code: "FR" };
    const actual = getCountryByPhone(phone);

    expect(actual).toEqual(country);
  });
});
