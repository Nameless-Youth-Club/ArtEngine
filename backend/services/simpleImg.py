from PIL import Image

class simpleImg: 

    bounds = [0,0,0,0] #TopY, RightX, BottomY, LeftX
    filename = ""

    def __init__(self, filename):
        self.filename = filename

    def setFilename(self, newFilename):
        self.filename = newFilename

    def convertImagetoSVG(self):
        myImg = Image.open(self.filename, 'r', None)
        return myImg.width
