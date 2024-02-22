#!/bin/bash
docker stop jeffrey-self_website-1
docker rm jeffrey-self_website-1

docker-compose up -d

docker tag jeffrey-self_website jeffreyyou/jeffrey-self_website:latest
docker push jeffreyyou/jeffrey-self_website:latest
