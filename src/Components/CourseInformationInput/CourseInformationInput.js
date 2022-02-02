import React, { useState } from "react";
import styles from "./CourseInformationInput.module.css";
import Button from "../../UI/Button/Button";

const CourseInformationInput = (props) => {
    const [enteredNameValue, setEnteredNameValue] = useState("");
    const [enteredAgeValue, setEnteredAgeValue] = useState("");
    const [isValid, setIsValid] = useState(true);
  
    const goalInputNameChangeHandler = (event) => {
      if (event.target.value.trim().length > 0) {
        setIsValid(true);
      }
      setEnteredNameValue(event.target.value);
    };

    const goalInputAgeChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
          setIsValid(true);
        }
        setEnteredAgeValue(event.target.value);
      };
  
    const formSubmitHandler = (event) => {
        if (enteredNameValue.trim().length === 0 || enteredAgeValue.trim().length === 0 ) {
          setIsValid(false);
          return;
        } else {
          const informationTamp = {
              name: enteredNameValue,
              age: enteredAgeValue,
              id: "HE"+Math.floor(Math.random() * 10000000)
          }
          event.preventDefault();
          props.addInformationHandler(informationTamp);
        }
      };
    
  
    return (
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${styles["information-control"]} ${!isValid && styles.invalid}`}
        >
          <label>Full name</label>
          <input type="text" onChange={goalInputNameChangeHandler} />
          <label>Age</label>
          <input type="number" onChange={goalInputAgeChangeHandler} />
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
    );
};

export default CourseInformationInput;
