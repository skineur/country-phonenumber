# Country phone number parser

this library uses `awesome-phonenumber` and allows to get the country name after parsing the phone number.

## Basic usage

``` javascript
import { phoneNumberParser } from 'country-phone-numbers'

const pn = phoneNumberParser( '237694124344' );
pn.isValid( );  // -> true
pn.isMobile( ); // -> true
pn.canBeInternationallyDialled( ); // -> true
pn.getNumber( );                   // -> '+237699999999'
pn.getNumber( 'e164' );            // -> '+237699999999' (default)
pn.getNumber( 'international' );   // -> '+237 6 99 99 99 99'
pn.getNumber( 'national' );        // -> '6 99 99 99 99'
pn.getNumber( 'rfc3966' );         // -> 'tel:+237-6-99-99-99-99'
pn.getNumber( 'significant' );     // -> '699999999'
pn.getRegionCode( );               // -> 'CM'
pn.getCountryCode( );              // -> 237
pn.getRegionName( );               // -> Cameroon

pn.toJSON( );                  // -> json blob, so that:
JSON.stringify( pn, null, 4 ); // -> This:
// {
//     "canBeInternationallyDialled": true,
//     "number": {
//         "input": "0707123456",
//         "international": "+46 70 712 34 56",
//         "national": "070-712 34 56",
//         "e164": "+46707123456",
//         "rfc3966": "tel:+46-70-712-34-56",
//         "significant": "707123456"
//     },
//     "regionCode": "SE",
//     "valid": true,
//     "possible": true,
//     "type": "mobile",
//     "possibility": "is-possible"
// }
```

`getRegionName` returns the country name