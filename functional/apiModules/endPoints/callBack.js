import http from 'k6/http';
import {
  check,
  fail
} from 'k6';
import {
  uuid
} from '../uuid.js';
// import {
//   updateBulkSuppliers
// } from './updateBulkSuppliers.js'



let url = __ENV.BULK_URL;
const key = __ENV.KEY;
const secret = __ENV.SECRET;
let usecase = "callback";




const params = {
  conversationID: uuid(usecase),
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': `${key}`,
    'x-api-secret': `${secret}`
  }
}


export function callBack(r) {


  const options = () => {
    return `${url}` + '/callback?request_id=' + `${r}`
  };
  let result = http.get(options(), params);

  check(result, {
    'get Suppliers response status is 200': (r) => r.status == 200
  }) || fail('status is not 200 ');

  let data = result.json();

  return data

}