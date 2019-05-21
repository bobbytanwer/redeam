import {
  group,
  sleep
} from 'k6';
import index from './index.js';


export default function () {
  group('update a supplier from get calls', function () {
    const suppID = index.getSuppliers();

    const suppDetails = index.getSupplierByID(suppID)

    index.updateSupplierByID(suppDetails, suppID);

  })
}