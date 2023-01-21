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
                  <tr key={index +1}>
                     <th>{index+1}</th>
                     <th>{el.manufacturer}</th>
                     <th>{el.model}</th>
                  </tr>
               )
            })}
         </table>
      </div>
   );
};

