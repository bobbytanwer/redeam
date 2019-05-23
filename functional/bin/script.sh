#! /bin/bash

#commands to run
echo "Starting test"


export BASE_URL='https://channel.develop.redeam.io/v1/suppliers'
export BULK_URL='https://channel.develop.redeam.io/v1/bulk/suppliers'
export KEY='your-key'
export SECRET='your-secret'
export LIMIT='10'

# In case you need to run Load you can set --vus 10 --duration 30s  below.After the "full" and then file name to run
# command to run

#k6 run --http-debug="full" ./apiModules/endPoints/getSuppliers.js
#k6 run --http-debug="full" ./apiModules/endPoints/getSupplierByID.js
# k6 run --http-debug="full" ./apiModules/endPoints/addNewSupplier.js
#k6 run --http-debug="full" ./apiModules/endPoints/updateSupplierByID.js
#k6 run --http-debug="full" ./apiModules/endPoints/updateBulkSuppliers.js
#k6 run --http-debug="full" ./apiModules/endPoints/callback.js 

#k6 run --http-debug="full" --vus 1 --duration 60s ./testCases/get_updateSupplier.js --sample for load test

k6 run --http-debug="full" ./functional/testCases/get_updateSupplier.js
