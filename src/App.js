import React, { useState } from "react";
import "./App.css";
import CourseInformationInput from "./Components/CourseInformationInput/CourseInformationInput";
import CourseInformationList from "./Components/CourseInformationList/CourseInformationList";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { name: "Le Hong Vo", age: 10, id: "HE1029382" },
    { name: "Le Hong Vo", age: 20, id: "HE3847389" },
  ]);

  const addGoalHandler = (enteredAllInformation) => {
    setCourseGoals((prevGoals) => {
      
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({name: enteredAllInformation.name, age: enteredAllInformation.age, id: enteredAllInformation.id});
      return updatedGoals;
    });
  };

  const deletePersonHandler = (personId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((person) => person.id !== personId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No found any one hear!. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseInformationList person={courseGoals} onDeletePerson={deletePersonHandler} />
    );
  }

  return (
    <div>
      <section id="information-form">
        <CourseInformationInput addInformationHandler={addGoalHandler} />
      </section>
      <section id="informations">{content}</section>
    </div>
  );
};

export default App;
