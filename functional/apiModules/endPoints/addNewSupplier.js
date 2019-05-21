import http from 'k6/http';
import {
  check,
  fail
} from 'k6';
import {
  uuid
} from '../uuid.js';
import {
  user
} from '../user.js';



let url = __ENV.BASE_URL;
const key = __ENV.KEY;
const secret = __ENV.SECRET;
let users = user();
let usecase = "addSupplier";


let options = {
  'Content-Type': 'application/json',
  'x-api-key': `${key}`,
  'x-api-secret': `${secret}`,
  conversationID: `${uuid(usecase)}`
}

let body = {
  meta: {
    reqId: '5fd78809-4700-46d7-8386-3b8738117f4d'
  },
  supplier: {
    code: `${users}`,
    ext: {
      test: 'test'
    },
    hours: [{
      dates: [],
      daysOfWeek: [1, 2, 3, 4, 5],
      times: [{
        close: '17:00',
        open: '08:00'
      }],
      valid: {
        from: '2018-10-19T17:37:31-06:00',
        until: '2018-10-19T19:37:31-06:00'
      }
    }],
    id: '',
    mainLocation: {
      address: {
        countryCode: 'USA',
        locality: 'central',
        postalCode: '75067',
        region: 'central',
        streetAddress: '200 memory ln'
      },
      city: 'plano',
      country: 'US',
      longLat: {
        latitude: 40.014984,
        longitude: -105.270546
      },
      name: 'none',
      notes: 'lets create a supplier',
      state: 'TX',
      utcOffset: '+01:00'
    },
    name: 'bobby_supplier',
    otherLocations: [{
      address: {
        countryCode: 'USA',
        locality: 'string',
        postalCode: 'string',
        region: 'string',
        streetAddress: 'string'
      },
      city: 'string',
      country: 'string',
      longLat: {
        latitude: 40.014984,
        longitude: -105.270546
      },
      name: 'string',
      notes: 'string',
      state: 'string',
      utcOffset: '+01:00'
    }],
    partnerId: 'string',
    travelerTypes: [{
      ageBand: 'ADULT',
      maxAge: 99,
      minAge: 18,
      name: 'Adult'
    }]
  }
}


export default function addNewSupplier() {

  let results = http.post(url, JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': `${key}`,
      'x-api-secret': `${secret}`,
      conversationID: `${uuid(usecase)}`
    }
  });

  check(results, {
    'get Supplier By ID response status is 201': (r) => r.status == 201
  }) || fail('status is not 201 ');

  let res = results.json();
  return res;

}