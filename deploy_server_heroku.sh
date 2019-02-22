#! /bin/bash
yarn build:server
heroku container:push --app=ancient-sands-21137 web
heroku container:release --app=ancient-sands-21137 web
# docker build -t ajay/wahpact:latest .
# docker push ajay/wahpact:latest 
# ssh IP on DigitalOcean 
# "docker pull ajay/wahpact:latest 
#&& docker tag ajay/wahpact:latest dokku/wahpact:latest 
#&& dokku tags:deploy wahpact latest"