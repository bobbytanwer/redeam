import http from 'k6/http';
import {
  check,
  fail
} from 'k6';
import {
  uuid
} from '../uuid.js';

let url = __ENV.BULK_URL;
const key = __ENV.KEY;
const secret = __ENV.SECRET;
let usecase = "updateBulkSuppliers";



let body = {
  "meta": {
    "reqId": "eee42b44-e709-4d59-94f0-bfc9444c13a9"
  },
  "supplier": [{
      "code": "bobby_code",
      "mainLocation": {
        "address": {
          "countryCode": "USA",
          "locality": "string",
          "postalCode": "string",
          "region": "string",
          "streetAddress": "string"
        },
        "city": "string",
        "country": "string",
        "longLat": {
          "latitude": 40.014984,
          "longitude": -105.270546
        },
        "name": "string",
        "notes": "string",
        "state": "string",
        "utcOffset": "+04:00"
      },
      "name": "bobby_supplier",
      "otherLocations": [{
        "address": {
          "countryCode": "USA",
          "locality": "string",
          "postalCode": "string",
          "region": "string",
          "streetAddress": "string"
        },
        "city": "string",
        "country": "string",
        "longLat": {
          "latitude": 40.014984,
          "longitude": -105.270546
        },
        "name": "string",
        "notes": "string",
        "state": "string",
        "utcOffset": "+04:00"
      }],
      "travelerTypes": [{
        "ageBand": "SENIOR",
        "maxAge": 99,
        "minAge": 18,
        "name": "Military"
      }],
      "version": 7
    },
    {
      "code": "bobby_code1",
      "mainLocation": {
        "address": {
          "countryCode": "USA",
          "locality": "string",
          "postalCode": "string",
          "region": "string",
          "streetAddress": "string"
        },
        "city": "string",
        "country": "string",
        "longLat": {
          "latitude": 40.014984,
          "longitude": -105.270546
        },
        "name": "string",
        "notes": "string",
        "state": "string",
        "utcOffset": "+04:00"
      },
      "name": "bobby_supplier",
      "otherLocations": [{
        "address": {
          "countryCode": "USA",
          "locality": "string",
          "postalCode": "string",
          "region": "string",
          "streetAddress": "string"
        },
        "city": "string",
        "country": "string",
        "longLat": {
          "latitude": 40.014984,
          "longitude": -105.270546
        },
        "name": "string",
        "notes": "string",
        "state": "string",
        "utcOffset": "+04:00"
      }],
      "travelerTypes": [{
        "ageBand": "SENIOR",
        "maxAge": 99,
        "minAge": 18,
        "name": "Military"
      }],
      "version": 3
    }
  ]
}

const options = () => {
  return `${url}`;
};

export default function updateBulkSuppliers() {

  let results = http.put(options(), JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': `${key}`,
      'x-api-secret': `${secret}`,
      conversationID: `${uuid(usecase)}`
    }
  });

  check(results, {
    'bulk update Supplier By ID response status is 200': (r) => r.status == 200
  }) || fail('status is not 200 ');

  let res = results.json();
  console.log(res);
  return res;

}