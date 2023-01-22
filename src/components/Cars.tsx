import React from 'react';

export const Cars = () => {
   const topCars = [
      {manufacturer:'BMW', model:'m5cs'},
      {manufacturer:'Mercedes', model:'e63s'},
      {manufacturer:'Audi', model:'rs6'}
   ]

   return (
      <div>
         <table>
            {topCars.map((el, index)=>{
               return(
                  <tr key={index}>
                     <td>{index+1}</td>
                     <td>{el.manufacturer}</td>
                     <td>{el.model}</td>
                  </tr>
               )
            })}
         </table>
      </div>
   );
};

