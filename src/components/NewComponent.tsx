import React from 'react';

type NewComponentProppsType = {
   students: Array<StudentPropsType>
}

type StudentPropsType = {
   id: number
   name: string
   age: number
}

export const NewComponent = (props: NewComponentProppsType) => {
   return (
      <>
         <ul>
            {props.students.map((objectFromStudentsArr, index) => {
               return (
                  <li key={objectFromStudentsArr.id}>
                     <span>{objectFromStudentsArr.name}</span>
                     <span> age: {objectFromStudentsArr.age}</span>
                  </li>
               )
            })}
         </ul>
      </>
   );
};

