import React from 'react';

type ButtonForInputPropsType={
   title:string
   callBack:()=>void
}

export const ButtonForInput = (props:ButtonForInputPropsType) => {

   const onClickHandler = () => {
     props.callBack()
   }

   return (
      <div>
         <button onClick={onClickHandler}>{props.title}</button>
      </div>
   );
}