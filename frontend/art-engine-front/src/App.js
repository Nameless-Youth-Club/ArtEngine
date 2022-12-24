import logo from './logo.svg';
import './App.css';
import formik from 'formik'
import React, { useState } from 'react';
import {useForm} from "react-hook-form"
import axios from 'axios';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
      const formData = new FormData();
      formData.append("file", data.file[0]);
      formData.append("smooth", data.smooth)
      formData.append("blockSize", data.blockSize)

      const res = await fetch("http://127.0.0.1:5000/uploadFileOptions", {
          method: "POST",
          body: formData,
      }).then((res) => res.json());
      alert(JSON.stringify({'width': res.data.width}));
  };

  return (
      <div className="App">
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
      </div>
  );
}

export default App;
