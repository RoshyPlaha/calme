#!/bin/bash

echo 'replacing values in index.html from env variables'

if test "$1" = "local"
then
    echo "You are allowed to change but please change back before a commit!"
    sed -i '' "s/AWS_CLIENT_APP_ID_REPLACE/$AWS_CLIENT_APP_ID/g;s/AWS_USERPOOL_ID_REPLACE/$AWS_USERPOOL_ID/g" static/index.html
elif test "$1" = "push"
then
    echo "Setting values to empty!"
    sed -i '' "s/$AWS_CLIENT_APP_ID//g;s/$AWS_USERPOOL_ID//g" static/index.html
else
    echo "No commands passed in. I dont know what to change!"
fi

