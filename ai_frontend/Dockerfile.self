FROM nginx
WORKDIR /usr/share/nginx/html/testserver-api
COPY ./build .
WORKDIR /usr/share/nginx/html/fissionailab
COPY ../../frame-front-end-v2/build .