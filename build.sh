#!/bin/bash

rm -rf ./logs

docker-compose down --rmi all
docker-compose up -d







