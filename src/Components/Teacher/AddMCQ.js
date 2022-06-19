import React from "react";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
function AddMCQ() {
  const initialValues = {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const sendDetails = (e) => {
    console.log(e);
  };
  const checkDetails = (data) => {
    if (data.email !== "" && data.password !== "") {
      axios
        .post("http://localhost:5000/teacher/questions", { data })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            console.log(response);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      checkDetails(formValues);
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.question) {
      errors.question = "Question is required";
    }
    if (!values.option1) {
      errors.option1 = "Option1 is required";
    }
    if (!values.option2) {
      errors.option2 = "option2 is required";
    }
    if (!values.option3) {
      errors.option3 = "option3 is required";
    }
    if (!values.option4) {
      errors.option4 = "option4 is required";
    }
    return errors;
  };
  return (
    <div style={{ background: "white" }}>
      <h1>ADD MCQ</h1>
      <form onSubmit={handleSubmit}>
        <div className="question" id="question">
          <label>Question</label>
          <br></br>
          <input
            type="text"
            name="question"
            value={formValues.question}
            onChange={handleChange}
          ></input>
        </div>
        <p>{formErrors.question}</p>
        <div className="question" id="question">
          <label>Option 1</label>
          <br></br>
          <input
            type="text"
            name="option1"
            value={formValues.option1}
            onChange={handleChange}
          ></input>
        </div>
        <p>{formErrors.option1}</p>
        <div className="question" id="question">
          <label>Option 2</label>
          <br></br>
          <input
            type="text"
            name="option2"
            value={formValues.option2}
            onChange={handleChange}
          ></input>
        </div>
        <p>{formErrors.option2}</p>
        <div className="question" id="question">
          <label>Option 3</label>
          <br></br>
          <input
            type="text"
            name="option3"
            value={formValues.option3}
            onChange={handleChange}
          ></input>
        </div>
        <p>{formErrors.option3}</p>
        <div className="question" id="question">
          <label>Option 4</label>
          <br></br>
          <input
            type="text"
            name="option4"
            value={formValues.option4}
            onChange={handleChange}
          ></input>
        </div>

        <p>{formErrors.option4}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMCQ;
