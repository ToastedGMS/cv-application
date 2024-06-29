import React from "react";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PractExperience = ({formData, changeVal}) => { {/* sectioned the form to avoid repetition */}
    return (
        <div>
        <h2>Practical Experience</h2> {/* call the changeVal function whenever a button is pressed on input */}
        <label>Company Name: <input type="text" name="company" onChange={changeVal} value={formData.company}/></label>
        <br />
        <label>Position Title: <input type="text" name="position-title" onChange={changeVal} value={formData['position-title']}/></label>
        <br />
        <label>Position Description: <input type="text" name="description" onChange={changeVal} value={formData.description}/></label>
        <br />
        <label>From: <input type="date" name="date-from" onChange={changeVal} value={formData['date-from']}/></label>
        <label>To: <input type="date" name="date-to" onChange={changeVal} value={formData['date-to']}/></label>
        <button><i><FontAwesomeIcon icon={faPlus} /></i></button>
      </div>
    );
};

PractExperience.propTypes = { //validate props to avoid errors and keep eslint happy :)
  formData: PropTypes.object,
  changeVal: PropTypes.func
}

export default PractExperience;