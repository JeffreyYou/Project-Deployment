#!/bin/bash

rm -rf ./logs

docker-compose -f docker-compose-deployment.yaml down --rmi all
docker-compose -f docker-compose-deployment.yaml up -d