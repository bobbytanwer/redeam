FROM loadimpact/k6
RUN apk add --no-cache bash
WORKDIR /
ADD . ./functional
RUN ls -la ./functional/testCases/

ENTRYPOINT [ "./functional/bin/script.sh" ]
