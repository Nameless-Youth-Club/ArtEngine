import logo from './logo.svg';
import './App.css';
import formik from 'formik'
import React, { useState } from 'react';
import {useForm} from "react-hook-form"
import axios from 'axios';
const parse = require('html-react-parser')

function App() {
  const { register, handleSubmit } = useForm();
  const [myImage, setMyImage ]  = useState();



  const onSubmit = async (data) => {
      const formData = new FormData();
      formData.append("file", data.file[0]);
      formData.append("smooth", data.smooth)
      formData.append("blockSize", data.blockSize)

      const res = await fetch("http://127.0.0.1:5000/uploadFileOptions", {
          method: "POST",
          body: formData,
      }).then((res) => res.json());
      setMyImage(res.data.image)
      console.log(myImage)
      //alert(JSON.stringify({'width': res.data.width}));
  };
  
  const styleObj = {
    flexDirection: 'column',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }

 const imageStyle = {
  height: 100,
  width: 100,
  alignItems: 'center'


 }

  return (
      <div className="App" style={styleObj}>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input type="file" {...register("file")} />
              <br></br>
              <label> Smoothness: 
                <input type="number"{...register("smooth")} name="smooth"/> 
              </label>
              <br></br>
              <label> block size:
                <input type="number"{...register("blockSize")} name="blockSize"/>
              </label>
              <br></br>
              <input type="submit" />
          </form>

          <div style={imageStyle}>
            {myImage == null ? "No Image to show": parse(myImage)}
          </div>

      </div>
  );
}

export default App;
