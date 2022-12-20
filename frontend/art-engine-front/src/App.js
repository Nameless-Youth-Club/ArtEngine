import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() {

const [inputs, setInputs] = useState({});


const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;

  setInputs(values => ({...values, [name]: value}))
}


const handleSubmit = (event) =>  {
  event.preventDefault();
  console.log("FRom frontend: " + inputs.inputFile)

  const url = 'http://127.0.0.1:5000/uploadFileOptions';
    const formData = new FormData();
    formData.append('image', inputs.inputFile);
    formData.append('smooth', inputs.smooth)
    formData.append('blockSize', inputs.blockSize)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    }).catch((e) => console.log(e));
   // axios.get(url).then((response) => console.log(response))

}


  return (
    <form onSubmit={handleSubmit}>
    <label>Enter your file:
    <input 
      type="file" 
      name="inputFile" 
      value={inputs.file || ""} 
      onChange={handleChange}
    />
    </label> 

    <br></br>
    <br></br> 

    <label>Enter smoothness:
      <input 
        type="number" 
        name="smooth" 
        value={inputs.smooth || ""} 
        onChange={handleChange}
      />
    </label>
    <br></br>
    <br></br>

    <label>Enter block size:
      <input 
        type="number" 
        name="blockSize" 
        value={inputs.blockSize || ""} 
        onChange={handleChange}
      />
     <br></br>
    <br></br>

    </label>
      <input type="submit" />
  </form>
  );
}

export default App;
