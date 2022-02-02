import React from "react";
import "./CourseInformationList.css";
import CourseInformationPerson from "../CourseInformationPerson/CourseInformationPerson";

const CourseInformationList = (props) => {
 
  // const getNumberIndex 

  return (
    <ul className="information-list">
      {props.person.map(person => (
        <CourseInformationPerson
          key={person.id}
          id={person.id}
          onDelete={props.onDeletePerson}
        >
        <label>Full Name: {person.name}</label> <br/>
        <label>Age: {person.age}</label> <br/>
        <label>Person id: {person.id}</label>     
        </CourseInformationPerson>
      ))}
    </ul>
  );
};
export default CourseInformationList;
