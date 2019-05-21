import http from 'k6/http';
import {
  check,
  fail
} from 'k6';
import {
  uuid
} from '../uuid.js';
import {
  getSupplierByID
} from './getSupplierByID.js'

let url = __ENV.BASE_URL;
const key = __ENV.KEY;
const secret = __ENV.SECRET;
//const suppID = '45c301d3-762e-4607-ab50-6ec5b518c5ce';
let usecase = "updateSupplierByID";







export function updateSupplierByID(suppDetails, suppID) {



  const options = () => {
    return `${url}/${suppID}`;
  };


  let body = {
    "meta": {
      "reqId": "e1c15214-82b3-49ac-ac10-b0d82f95848e"
    },
    "supplier": {
      "code": "bobby_code1",
      "ext": {
        "string": "version2"
      },
      "hours": [{
        "dates": [],
        "daysOfWeek": [
          1, 2, 3, 4, 5, 6, 7
        ],
        "times": [{
          "close": "17:00",
          "open": "08:00"
        }],
        "valid": {
          "from": "2018-10-19T17:37:31-06:00",
          "until": "2020-10-19T17:37:31-06:00"
        }
      }],
      "id": `${suppDetails.id}`,
      "mainLocation": {
        "address": {
          "countryCode": "USA",
          "locality": "string",
          "postalCode": "75967",
          "region": "TEXAS",
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
      "partnerId": "string",
      "travelerTypes": [{
        "ageBand": "ADULT",
        "maxAge": 99,
        "minAge": 18,
        "name": "Military"
      }],
      "version": parseInt(`${suppDetails.version}`)
    }
  }

  let results = http.put(options(), JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': `${key}`,
      'x-api-secret': `${secret}`,
      conversationID: `${uuid(usecase)}`
    }
  });






  check(results, {
    'update Supplier By ID response status is 200': (r) => r.status == 200
  }) || fail('status is not 200 ');

  let res = results.json();
  return res;

}