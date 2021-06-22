#!/bin/sh
echo "Switching working directory to artifact1-ui"
cd ../artifact1-ui/

echo "Installing front end dependencies"
yarn

echo "Building front end project"
yarn run build
echo -e "\n\n\n"

echo "Switching working directory to artifact1"
cd ../artifact1

echo "Deleting /src/main/resources/public/"
rm -rf ./src/main/resources/public/

echo "Copying artifact1-ui to artifact1/src/main/resources/public"
mkdir ./src/main/resources/public/
cp -r ../artifact1-ui/build/* ./src/main/resources/public/

mvn clean install --no-transfer-progress

