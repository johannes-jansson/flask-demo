from flask import Flask
from flask_cors import CORS, cross_origin
from time import sleep

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/my-action")
@cross_origin()
def my_action():
    sleep(2)
    return {"field_a": 9000}

if __name__ == '__main__':
    app.run(port=5000, debug=True)
