# Functional/Performance/Load Test for Redeam.

RUN chmod 755 ./bin/script.sh
ENTRYPOINT [./functional/bin/script.sh]
### Test suite follows Page Object Pattern.
For SECRET & KEY, we pass the data as __ENV variable which is available as any system variable.
For each endpoint used as part of the use case is setup as independent and modular page.
These pages can be called in any use case flow from TestCases folder. They can be grouped in shape of user flow.

To do a quick run. Please update the script.sh file with your key & secret values. 

        
Directory Structure:

         /apiModules/endpoints: 
         -   /getSupplier
         -   /getSupplierByID
         -   /addNewSupplier
         -   /updateASupplier
         -   /updateManySuppliers
         and so on.
    Follow the documentaion on companies websites developer portal to understand API contract.
    TestCase:

         -  /get_updateSuppliers.js
            Test call getsupplier, takes the supplier id from response and makes call to getSupplierByID. Then passes version & ID to the updateASupplier Call.
        -   2nd GROUP runs bulk update and performs         callback on the the update.
         TODO:
         -  /
         -  /
         are some of the test cases.

    How to Run the tests Locally :

        - K6 should be installed locally on your machine
        - clone the git repo @ 
        - add additional test cases if you need to.
        - jump into /functional/bin/script.sh
 following will need to be added to script.sh in order to run
            echo "Starting test"


    export BASE_URL='https://channel.develop.redeam.io/v1/suppliers'
    export BULK_URL='https://channel.develop.redeam.io/v1/bulk/suppliers'
    export KEY='your-key'
    export SECRET='your-secret'
    export LIMIT='10'

        In case you need to run Load you can set --vus 10 --duration 30s  below.
    command to run: 
    k6 run --http-debug="full" ./apiModules/endPoints/getSuppliers.js
    k6 run --http-debug="full" ./apiModules/endPoints/getSupplierByID.js
    k6 run --http-debug="full" ./apiModules/endPoints/addNewSupplier.js
    k6 run --http-debug="full" ./apiModules/endPoints/updateSupplierByID.js
    k6 run --http-debug="full" ./apiModules/endPoints/updateBulkSuppliers.js
    k6 run --http-debug="full" ./functional/testCases/get_updateSupplier.js
        - You will be able to run the scripts laid out in the file.
How to Run the test docker 

If you have docker installed. Provided docker file, will be best way to run the test.(no ENV setup need !! ). 

From within the folder. Run following CMD
        
    Run Docker build
Grab the image name 
        
      Docker run 'image_name'

You can run locally in docker or integrate it in your CI/CD      pipeline.

Below is from  https://docs.k6.io/docs       
How to read results on Std out
By default, k6 sends its output to stdout only. When started up,
it will display a very tasteful ASCII splash screen with the k6 logo and version information, 
plus details about the test and options active. We will go through the things one by one here:

execution: local k6 is not being used to control another k6 instance (distributed execution).
            
### output: - Output is sent to stdout only.
            script: group.js (js) Shows what script we are running. 
            The (js) at the end indicates that k6 thinks this file contains 
            JavaScript code (that should be executed by the VUs).

            duration: 0s, iterations: 1 The VUs in the test will only perform 
            one single script iteration (calling the default function once) each, 
            and there is no time limit set.

            vus: 1, max: 1 Simulate 1 VU (virtual user), allocate resources 
            for a "max" of 1 VU (meaning we can't scale up the load level in this case).

            done [==============] 800ms / 800ms This is the progress bar 
            that updates while the test is running, to indicate how far the 
            test has come and how much time has passed.

            █ my user scenario is the name of a group we have created in our JS script.

            █ front page is the name of a sub-group that was created 
            inside the previously mentioned group ("my user scenario").
            ✓ 100.00% - status code is 200 is the result from a check() 
            that was executed inside the "front page" group. 
            Note how this check result is indented,to indicate that it belongs to the "front page" group. 
            The "front page" group name, in turn,is indented 
            to indicate it belongs to its parent group ("my user scenario").

            █ features page is another group that belongs to the parent group "my user scenario".
            ✓ 100.00% - status code is 200 and ✓ 100.00% 
            - h1 message is correct are two more checks that belong to the "features page" group.
            checks................: 100.00% tells us the percentage of our checks that passed.
            And then comes the HTTP timing information. 
            There are several metrics being reported here, and percentiles etc. for each of them:

            http_req_blocked The time VUs spent waiting to be allocated a TCP connection from the connection pool.
            http_req_connecting The time VUs spent performing TCP handshakes 
                (setting up TCP connections to the remote host).
            http_req_looking_up The time spent performing DNS lookups.
            http_req_sending The time spent transmitting HTTP requests to the remote host.
            http_req_waiting The time spent waiting for a response to come back from the remote host (after having sent a request).
            http_req_receiving The time spent receiving a reply from the remote host.
            http_req_duration Total time for the request. It's equal to 
            http_req_sending + http_req_waiting + http_req_receiving (i.e.how long did the remote server 
            take to process the request and respond, without the initial DNS lookup/connection times).

            All of these are metrics of the Trend type, which means you can 
            extract max, min, percentile, average values from them. On stdout they are printed like this:

            http_req_duration.....: avg=46.32ms, max=46.32ms, med=46.32ms, min=46.32ms, p90=46.32ms, p95=46.32ms

            After the HTTP timing metrics, there will be a few final lines of output:

            http_reqs........: 2 The total number of HTTP requests made during the whole load test.
            iterations........: 1 The total number of times all VUs in the test managed to run through the default() function.
            vus.................: 1 How many VUs the test was configured to simulate.
            vus_max........: 1 The number of pre-allocated VU slots the test was c
            onfigured for (vus_max allows you to scale up the number of VUs in the test to max that number).
