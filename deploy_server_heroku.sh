#! /bin/bash
yarn build:server
heroku container:push --app=streeedu web
heroku container:release --app=streeedu web
# docker build -t ajay/wahpact:latest .
# docker push ajay/wahpact:latest 
# ssh IP on DigitalOcean 
# "docker pull ajay/wahpact:latest 
#&& docker tag ajay/wahpact:latest dokku/wahpact:latest 
#&& dokku tags:deploy wahpact latest"