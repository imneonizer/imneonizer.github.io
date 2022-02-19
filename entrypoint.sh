#!/bin/bash

if [[ ! -e './node_modules' ]]; then
    npm install --silent --save
fi

npm start