import React from "react";
import PropTypes from 'prop-types';

const General = ({formData, changeVal}) => { {/* sectioned the form to avoid repetition */}

return (
        <>
        <h1>Application</h1>
    <div>
      <h2>General Information</h2> {/* call the changeVal function whenever a button is pressed on input */}
      <label>Name: <input type="text" name="name" onChange={changeVal} value={formData.name}/></label>
      <br />
      <label>Email: <input type="email" name="email" onChange={changeVal} value={formData.email}/></label>
      <br />
      <label>Phone Number: <input type="tel" name="phone-number" onChange={changeVal} value={formData['phone-number']}/></label>
    </div> 
        </>
    );
};

General.propTypes = { //validate props to avoid errors and keep eslint happy :)
  formData: PropTypes.object,
  changeVal: PropTypes.func
}

export default General;