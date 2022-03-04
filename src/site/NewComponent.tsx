import React from 'react';

type NewComponentType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number,
    name: string,
    age: number
};

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentArray, index) => {

                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name} age: </span>
                        <span>{objectFromStudentArray.age}</span>
                    </li>
                )
            })}
        </ul>
    )
};












