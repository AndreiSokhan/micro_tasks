import React, {useState} from 'react';

export const Сounter = () => {

   // let a = 1
   let [a, setA] = useState(0)
   const onClickHandler = () => {
      setA(++a)
      console.log(a)
   }

   const resetHandler = () => {
     setA(0)
   }

   return (
      <div>
         <h2>{a}</h2>
         <button onClick={onClickHandler}>number</button>
         <button onClick={resetHandler}>reset</button>
      </div>
   );
};

