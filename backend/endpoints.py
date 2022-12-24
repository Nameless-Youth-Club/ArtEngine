from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from services.simpleImg import simpleImg
import os

app = Flask(__name__)


dirname = os.path.dirname(__file__)

UPLOAD_FOLDER = dirname + '/services/images/'

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
CORS(app)

mySimpleImg = simpleImg("placeHolder")



in_memory_datastore = {
   "COBOL" : {"name": "COBOL", "publication_year": 1960, "contribution": "record data"},
   "ALGOL" : {"name": "ALGOL", "publication_year": 1958, "contribution": "scoping and nested functions"},
   "APL" : {"name": "APL", "publication_year": 1962, "contribution": "array processing"},
}

@app.get('/programming_languages')
def list_programming_languages():
   return {"programming_languages":list(in_memory_datastore.values())}


@app.route('/uploadFileOptions', methods=['GET', 'POST'])
def uploadFileRoute():
   if request.method == "GET": 
      return {"programming_languages":list(in_memory_datastore.values())}
   else:
      print(request.form.get('blockSize'))
      mySimpleImg.upload_file(request, app.config)
      return jsonify({"data" : {"smooth" : request.form.get('smooth'), "blockSize": request.form.get('blockSize')}})
    
