from PIL import Image
import os
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename


dirname = os.path.dirname(__file__)

UPLOAD_FOLDER = dirname + '/images/'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])


class simpleImg: 

    bounds = [0,0,0,0] #TopY, RightX, BottomY, LeftX
    filename = ""

    def __init__(self, filename):
        self.filename = filename

    def allowed_file(self, filename):
        return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

    def upload_file(self, request, config):
        if request.method == 'POST':
            # check if the post request has the file part
            if 'file' not in request.files:
                flash('No file part')
                return redirect(request.url)
            file = request.files['file']
            # if user does not select file, browser also
            # submit a empty part without filename
            if file.filename == '':
                flash('No selected file')
                return redirect(request.url)
            if file and self.allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join(config['UPLOAD_FOLDER'], filename))
                self.setFilename(filename)
                


    def setFilename(self, newFilename):
        self.filename = newFilename

    def convertImagetoSVG(self):
        filePath = UPLOAD_FOLDER + self.filename
        myImg = Image.open(filePath, 'r', None)
        print(myImg.width)
        return myImg.width
