import React, {useState} from 'react';

export const Counter = () => {
   let [a, setA] = useState(1)

   const onClickHandler = () => {
      setA(++a)
      console.log(a)
   }
   const onClickHandlerRest = () => {
      setA(0)
   }

   return (
      <div>
         <h3>{a}</h3>
         <button onClick={onClickHandler}>number</button>
         <button onClick={onClickHandlerRest}>rest</button>
      </div>
   );
};