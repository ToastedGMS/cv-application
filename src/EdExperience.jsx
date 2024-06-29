import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const EdExperience = ({formData, changeVal}) => { {/* sectioned the form to avoid repetition */}
    return (
        <div>
        <h2>Educational Experience</h2> {/* call the changeVal function whenever a button is pressed on input */}
        <label>School Name: <input type="text" name="school" onChange={changeVal} value={formData.school}/></label>
        <br />
        <label>Title of Study: <input type="text" name="title" onChange={changeVal} value={formData.title}/></label>
        <br />
        <label>Date of Study: <input type="date" name="date" onChange={changeVal} value={formData.date}/></label>
        <button><i><FontAwesomeIcon icon={faPlus} /></i></button>
      </div>
    );
};

EdExperience.propTypes = { //validate props to avoid errors and keep eslint happy :)
  formData: PropTypes.object,
  changeVal: PropTypes.func
}

export default EdExperience;