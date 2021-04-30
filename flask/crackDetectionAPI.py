import flask,cv2,tensorflow,io
from flask import render_template, json, jsonify, request,Response
import numpy as np
from tensorflow import keras
from keras.preprocessing import image
from flask import jsonify
# Improting Image class from PIL module 
from PIL import Image
from flask_cors import CORS, cross_origin

# ...

# Remember to set a max content length 
app = flask.Flask(__name__)
cors = CORS(app)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 # 16 MB
app.config['CORS_HEADERS'] = 'Content-Type'

# ...
reconstructed_model = keras.models.load_model("myModel")
# Here is the code to convert the post request to an OpenCV object

@app.route('/crackDetection', methods=['POST'])
@cross_origin()
def function():
    print(request)
    if request.method == 'POST':
        print(request.files['file'])
        print(request)
        # return jsonify({'response':"Sri", 'status':200}) 
    # return jsonify({'response':"Aj", 'status':200})
        photo = request.files['file']
        in_memory_file = io.BytesIO()
        photo.save(in_memory_file)
        # print(type(in_memory_file))
        # data = np.frombuffer(in_memory_file.getvalue(), dtype=np.uint8)
        # color_image_flag = 1
        # img = cv2.imdecode(data, color_image_flag)
        # print(type(img))
        img=Image.open(in_memory_file)
        img=img.resize((227,227))
        # print(img.size)
        img_tensor = image.img_to_array(img)
        img_tensor = np.expand_dims(img_tensor,axis=0)
        img_tensor/=255.
        y=reconstructed_model.predict(img_tensor)
        # print(y)
        class_name=['Crack','No Crack']
        a=np.argmax(y)
        if y[0][a]>0:
            
            result = class_name[a]
            # print(class_name[a])
        else:
            return jsonify({'response':"Not Found", 'status':200}) 
    return jsonify({'response':result, 'status':200}) 

app.run()