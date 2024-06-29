import React, { useState } from "react"
import "./styles/App.css"
import Resume from "./Resume"
import Form from "./Form"

export default function App() { 
  const [ formData, setFormData ] = useState({ //set up empty values for dynamically updating the values on screen
    name: '',
    email: '',
    ['phone-number']: '',
    school: '',
    title: '',
    date: '',
    company: '',
    ['position-title']: '',
    description: '',
    ['date-from']: '',
    ['date-to']:''
  });

  const changeVal = (e) =>{ //take the user input and set it's value to be displayed on resume with each button click
    const { name, value } = e.target;
    setFormData({
        ...formData, [name]: value
    })
}
  return (

    <div className="container">

    <div className="leftDiv"> {/* div with input fields */}
    <Form formData={formData} setFormData={setFormData} changeVal={changeVal}/>

    </div>
    <div className="rightDiv"> {/* div with resume display */}
    <Resume key={crypto.randomUUID()} formData={formData}/>

    </div>
    </div>
  )
}