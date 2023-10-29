import React from 'react';

type ButtonForInputPropsType = {
   buttonName: string
   callback: () => void
}

export const ButtonForInput = (props: ButtonForInputPropsType) => {

   const onClickButtonForInputHandler = () => {
      props.callback()
   }

   return (
      <button onClick={onClickButtonForInputHandler}>{props.buttonName}</button>
   );
};
