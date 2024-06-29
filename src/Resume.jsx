import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO, isValid } from 'date-fns';

const Resume = ({formData}) => {

  const formatDate = (dateString) => { //helper function to avoid date-fns invalid date string error that keeps page from rendering
    const parsedDate = parseISO(dateString);
    return isValid(parsedDate) ? format(parsedDate, 'MMMM do, yyyy') : 'Invalid date';
  };


  return (
    <>
      <div> {/* keep values blank if there's no data and dynamically update them as son as user inputs something */}
      <h1>Resume</h1>

      <h2>General Information</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Number: {formData['phone-number']}</p>

      <h2>Educational Experience</h2>
      <p>School Name: {formData.school}</p>
      <p>Title of Study: {formData.title}</p>
      <p>Date of Study: {formatDate(formData.date)}</p>

      <h2>Practical Experience</h2>
      <p>Company Name: {formData.company}</p>
      <p>Position Title: {formData['position-title']}</p>
      <p>Position Description: {formData.description}</p>
      <p>From: {formatDate(formData['date-from'])}</p>
      <p>To: {formatDate(formData['date-to'])}</p>
      </div>
  </>
  );
};

Resume.propTypes = { //validate props to avoid errors and keep eslint happy :)
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    'phone-number': PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    'position-title': PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    'date-from': PropTypes.string.isRequired,
    'date-to': PropTypes.string.isRequired,
  }).isRequired,
};


export default Resume;
