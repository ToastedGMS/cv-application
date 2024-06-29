import React from "react";
import PropTypes from 'prop-types';
import General from "./General";
import EdExperience from "./EdExperience";
import PractExperience from "./PractExperience";

const Form = ({formData, changeVal}) => {

    return (
    <div >
        <form className="application-form">
        {/* separated form fields into components to avoid repetition and keep code more organized */}
        <General formData={formData} changeVal={changeVal}/>
        <EdExperience formData={formData} changeVal={changeVal}/>
        <PractExperience formData={formData} changeVal={changeVal}/>
        </form>
    </div>
    )
}

Form.propTypes = { //validate props to avoid errors and keep eslint happy :)
    formData: PropTypes.object,
    changeVal: PropTypes.func
}

export default Form;