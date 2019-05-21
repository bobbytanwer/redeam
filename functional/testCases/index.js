import {
  group
} from 'k6';
import {
  getSuppliers
} from '../apiModules/endPoints/getSuppliers.js';
import {
  getSupplierByID
} from '../apiModules/endPoints/getSupplierByID.js';
import {
  addNewSupplier
} from '../apiModules/endPoints/addNewSupplier.js';
import {
  updateSupplierByID
} from '../apiModules/endPoints/updateSupplierByID.js';
import {
  updateBulkSuppliers
} from '../apiModules/endPoints/updateBulkSuppliers.js';

import {
  uuid
} from '../apiModules/uuid.js';




export default {
  group,
  getSuppliers,
  getSupplierByID,
  addNewSupplier,
  updateSupplierByID,
  updateBulkSuppliers,
  uuid
}