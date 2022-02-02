import React from "react";
import "./CourseInformationPerson.css";

const CourseInformationPerson = (props) => {

    const deleteOnePerson = () => {
        props.onDeletePerson(props.id);
    } 

    return (
        <li className="information-item" onClick={deleteOnePerson}>
           {props.children}
        </li>
    )

}

export default CourseInformationPerson;