FROM loadimpact/k6
RUN apk add --no-cache bash
WORKDIR /
ADD . ./functional
RUN ls -la ./functional/

ENTRYPOINT [ "./functional/bin/script.sh" ]
