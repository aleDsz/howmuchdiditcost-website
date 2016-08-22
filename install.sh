#!/bin/bash

echo "$(tput setaf 3 bold)========================"
echo "Installing NPM Dependencies"
echo "========================$(tput sgr0)"
echo ""
npm install

echo "$(tput setaf 3 bold)========================"
echo "Copying files to project folder"
echo "========================$(tput sgr0)"
echo ""

echo "$(tput setaf 2)Installling Semantic-UI...$(tput sgr0)"
cp ./config/theme.config ./semantic/src/
cd semantic
gulp build
cd ..
cp ./semantic/dist/*.css ./src/css/
cp ./semantic/dist/*.js ./src/lib/
cp -R ./semantic/dist/themes/ ./src/css/
cp -R ./semantic/dist/components/ ./src/css/

echo "$(tput setaf 2)Installing jQuery...$(tput sgr0)"
cp ./node_modules/jquery/dist/jquery.js ./src/lib/

echo "$(tput setaf 2)Installing Angular...$(tput sgr0)"
cp ./node_modules/angular/angular.js ./src/lib/
