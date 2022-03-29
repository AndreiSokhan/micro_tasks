import React from 'react';

type AutoComponentType = {
   topCars: Array<topCarType>
}

type topCarType = {
   manufacturer: string,
   model: string
};

export const AutoComponent = (props: AutoComponentType) => {
   return (
      <table>
         {props.topCars.map((objectFromAutoArray, index) => {
            return (
               <tr>
                  <td>{index + 1}</td>
                  <td>
                     <span> manufacturer: '{objectFromAutoArray.manufacturer}'</span>
                  </td>
                  <td>
                     <span> model: '{objectFromAutoArray.model}'</span>
                  </td>
               </tr>
            )
         })}
      </table>
   )
};


// <ul>
//     {props.students.map((objectFromStudentArray, index) => {
//         return (
//             <li key={objectFromStudentArray.id}>
//                 <span>{objectFromStudentArray.name} age: </span>
//                 <span>{objectFromStudentArray.age}</span>
//             </li>
//         )
//     })}
// </ul>












