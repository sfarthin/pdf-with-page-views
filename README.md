pdf-with-page-views
===================

Simple Node.js app that serves a PDF and gathers page views. It can be deployed on Heroku so that it is a standalone app. It can be proxied from your nginx/apache web server.


### Use
1. Replace example.pdf
2. Deploy to heroku
3. Set up a proxy on your domain (i.e. http://mydomain.com/example.pdf) to point to your heroku app (i.e. http://mighty-brook-7466.herokuapp.com/ ). *NOTE:* Turn proxy cache off or page views won't be accurate.


### Example

You can see the pdf here: http://mighty-brook-7466.herokuapp.com/

You can see the number of page views here: http://mighty-brook-7466.herokuapp.com/stats
