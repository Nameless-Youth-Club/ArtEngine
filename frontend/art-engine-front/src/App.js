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

      const res = await fetch("http://127.0.0.1:5000/uploadFileOptions", {
          method: "POST",
          body: formData,
      }).then((res) => res.json());
      alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };

  return (
      <div className="App">
          <form onSubmit={handleSubmit(onSubmit)}>
              <input type="file" {...register("file")} />

              <input type="submit" />
          </form>
      </div>
  );
}

export default App;

// function App() {

// const [image, setImage] = useState();
// const [inputs, setInputs] = useState({});

// const handleUpload = () => {



// }


// const handleChange = (event) => {
//   const name = event.target.name;
//   const value = event.target.value;
//   setInputs(values => ({...values, [name]: value}))
// }


// const handleSubmit = (event) =>  {
//   event.preventDefault();
//   console.log("FRom frontend: " + inputs.inputFile)

//   const url = 'http://127.0.0.1:5000/uploadFileOptions';
//     const formData = new FormData();
//     formData.append('image', inputs.inputFile);
//     formData.append('smooth', inputs.smooth)
//     formData.append('blockSize', inputs.blockSize)
//     const config = {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     };
//     axios.post(url, formData, config).then((response) => {
//       console.log(response.data);
//     }).catch((e) => console.log(e));
//    // axios.get(url).then((response) => console.log(response))

// }

//   return (
//     <form onSubmit={handleSubmit}>
//     <label>Enter your file:
//     <input 
//       type="file" 
//       name="inputFile" 
//       value={inputs.file || ""} 
//       onChange={handleUpload}
//     />
//     </label> 

//     <br></br>
//     <br></br> 

//     <label>Enter smoothness:
//       <input 
//         type="number" 
//         name="smooth" 
//         value={inputs.smooth || ""} 
//         onChange={handleChange}
//       />
//     </label>
//     <br></br>
//     <br></br>

//     <label>Enter block size:
//       <input 
//         type="number" 
//         name="blockSize" 
//         value={inputs.blockSize || ""} 
//         onChange={handleChange}
//       />
//      <br></br>
//     <br></br>

//     </label>
//       <input type="submit" />
//   </form>
//   );
// }

// export default App;

