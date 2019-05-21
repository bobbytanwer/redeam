import http from 'k6/http';
import {
  check,
  fail
} from 'k6';
import {
  uuid
} from '../uuid.js';


const base_url = __ENV.BASE_URL;
const headers = __ENV.HEADERS;
const useCase = 'getAllSuppliers';
const limit = __ENV.LIMIT

const key = __ENV.KEY;
const secret = __ENV.SECRET;


const params = {
  conversationID: uuid(useCase),
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': `${key}`,
    'x-api-secret': `${secret}`
  }
}

const options = () => {
  return `${base_url}?limit=${limit}`;
};


export function getSuppliers() {

  let result = http.get(options(), params);

  check(result, {
    'get Suppliers response status is 200': (r) => r.status == 200
  }) || fail('status is not 200 ');

  let data = result.json();

  let d = data.suppliers[0].id;
  return d

}