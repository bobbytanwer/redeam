import {
  group,
  sleep
} from 'k6';
import index from './index.js';


export default function () {
  group('update a supplier from get calls', function () {
    const suppID = index.getSuppliers();
    sleep(2);
    const suppDetails = index.getSupplierByID(suppID)
    sleep(2);
    index.updateSupplierByID(suppDetails, suppID);

    index.addNewSupplier();

  });
  group(' update Bulk suppliers and callback', function () {

    const r = index.updateBulkSuppliers();
    sleep(2);
    index.callBack(r);

  });
}