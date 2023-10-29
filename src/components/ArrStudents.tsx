import React from 'react';

type NewComponentPropsType = {
   students: Array<StudentsPropsType>
   topCars: Array<TopCarsPropsType>
}
type StudentsPropsType = {
   id: number
   name: string
   age: number
}

type TopCarsPropsType = {
   manufacturer: string
   model: string
}

export const ArrStudents = (props: NewComponentPropsType) => {
   return (
      <>
         <ul>
            {props.students.map((el, index) => {
               return (
                  <li key={el.id}>
                     <span>{el.name}</span>
                     <span> age: {el.age}</span>
                  </li>
               );
            })}
         </ul>


         <table>
            {props.topCars.map((tr, index) => {
               return (
                  <tr key={index}>
                     <th>{index + 1}</th>
                     <td>{tr.manufacturer}</td>
                     <td>{tr.model}</td>
                  </tr>
               );
            })}

         </table>
      </>
   );
};

