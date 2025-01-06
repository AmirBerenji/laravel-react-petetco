FROM quay.io/soketi/soketi:latest-16-debian

# Update and upgrade system packages, then install required system packages.
RUN apt-get update && apt-get install -y -q \
apt-utils curl dialog locales tzdata ca-certificates


#COPY ../../websocket-config.json /app/config.json

#RUN chmod 777 /app/config.json

# Reset Environment variables.
ENV DEBIAN_FRONTEND dialog

WORKDIR /app

EXPOSE 6003

ENTRYPOINT ["node", "/app/bin/server.js", "start", "--config=/app/config.json"]
