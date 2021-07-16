# Flask-demo

A sample frontend-backend app using flask and vanilla js.

Run the backend with `python backend.py`.
Open the html file, or launch a web server using `python -m http.server 8080` and then visit [http://localhost:8080](http://localhost:8080).

The only confusing aspect of this should be [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). 
It's basically a security feature, and in this instance we allow everybody everywhere to access our flask api.
