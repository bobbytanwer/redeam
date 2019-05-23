import http from 'k6/http';
import {
  check,
  fail
} from 'k6';
import {
  uuid
} from '../uuid.js';
import {
  reqID
} from '../reqID.js';

let url = __ENV.BULK_URL;
const key = __ENV.KEY;
const secret = __ENV.SECRET;
let usecase = "updateBulkSuppliers";
let reqid = reqID();




const options = () => {
  return `${url}`;
};

export function updateBulkSuppliers() {

  let body = {
    "requestId": `${reqid}`, //"462ec9b8-9af7-4bb1-9d53-3f08392dc964",
    "suppliers": [{
        "code": "bobby_code4",
        "times": [{
          "close": "17:00",
          "open": "08:00"
        }],
        "mainLocation": {
          "name": "new_supplier_bobby1"
        },
        "longLat": {
          "latitude": 40.014984,
          "longitude": -105.270546
        },
        "name": "bobby_supplier",
        "travelerTypes": [{
          "ageBand": "ADULT",
          "maxAge": 99,
          "minAge": 18,
          "name": "Adult"
        }]
      },
      {
        "code": "bobby_code5",
        "times": [{
          "close": "17:00",
          "open": "08:00"
        }],
        "mainLocation": {
          "name": "new_supplier_bobby1"
        },
        "longLat": {
          "latitude": 40.014984,
          "longitude": -105.270546
        },
        "name": "bobby_supplier",
        "travelerTypes": [{
          "ageBand": "ADULT",
          "maxAge": 99,
          "minAge": 18,
          "name": "Adult"
        }]
      }
    ]
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
    'bulk update Supplier By ID response status is 200': (r) => r.status == 202
  }) || fail('status is not 200 ');
  //console.log(reqid)
  let res = results.json();
  console.log(JSON.stringify(res.requestId));
  return res.requestId;

}