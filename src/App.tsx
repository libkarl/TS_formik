import React from 'react';
import './App.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {Formik, validateYupSchema} from "formik";

function App() {
  

  return (
    
    <div className="App">
    <Formik
     
      initialValues={{
        name: "",
        username: "",
        email: "",
        dob: "",
        password: "",
      }}
      onSubmit={(values)=>{
        alert(JSON.stringify(values));

      }}
      
      
      >

      {({handleSubmit, values, handleChange, setFieldValue})=> {
        let dateOnChange = (date: Date | [Date, Date]| null) => {
          setFieldValue("dob", date)
        }
        
        return(
          <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name='name'placeholder='Type your name here' 
          value={values.name} onChange={handleChange}
          />
          
          <label>User Name</label>
          <input type="text" name='username'placeholder='Type your User Name here' 
          value={values.username} onChange={handleChange}
          />

          <label>Email</label>
          <input type="text" name='email'placeholder='Type your Email' 
          value={values.email} onChange={handleChange}
          />

          <label>Date of Birth</label>
          <DatePicker name="dob" placeholderText='This is where you set you Date of Birth' 
          value={values.dob}
          onChange={dateOnChange}/>
          <label>Password</label>
          <input type="password" name="password" placeholder="Give me your password"
          value={values.password} onChange={handleChange}
          />
          <button type="submit" >Give me your info and like this video</button>

          </form>

        )
      
        
      }}
      </Formik>
      
    </div>
  );
}

export default App;
