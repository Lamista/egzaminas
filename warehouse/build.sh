#!/bin/sh
cd ../warehouse-ui/
yarn
yarn run build
cd ../warehouse
rm -rf ./src/main/resources/public/
mkdir ./src/main/resources/public/
cp -r ../warehouse-ui/build/* ./src/main/resources/public/

mvn clean install --no-transfer-progress

