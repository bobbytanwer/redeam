import http from 'k6/http';
import {
  check,
  fail
} from 'k6';
import {
  uuid
} from '../uuid.js';


const base_url = __ENV.BASE_URL;
const useCase = 'getSupplierByID';

//const suppID = getSuppliers(); to be used when grouping
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





export function getSupplierByID(suppID) {
  const options = () => {
    return `${base_url}/${suppID}`;
  };
  let result = http.get(options(), params);

  check(result, {
    'get Supplier By ID response status is 200': (r) => r.status == 200
  }) || fail('status is not 200 ');

  let res = result.json();
  let version = res.supplier.version
  let id = res.supplier.id
  let code = res.supplier.code
  let resultChecks = {
    id,
    version,
    code
  }
  console.log(JSON.stringify(resultChecks), '\n');

  return resultChecks;

}