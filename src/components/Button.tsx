import React from 'react';

export const Button = () => {

   // const myFirstSubs = (event: MouseEvent<HTMLButtonElement>) => {
   //    console.log('Hello Im Vasya')
   // }
   // const mySecondSubs = (event: MouseEvent<HTMLButtonElement>) => {
   //    console.log('Hello Im Ivan')
   // }

   const onClickHandler = (name: string) => {
      console.log(name)
   }

   return (
      <div>
         {/*<button onClick={(event)=>{*/}
         {/*   console.log('Hello')}}>My button_1</button>*/}
         <button onClick={() => {onClickHandler('Vasia')}}>My button_2</button>
         <button onClick={() => onClickHandler('Ivan')}>My button_3</button>
      </div>
   );
};