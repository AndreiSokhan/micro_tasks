import React from 'react';

type ButtonPropsType = {
   name: string
   callBack: () => void
}

export const UniversalButton = (props: ButtonPropsType) => {

   const onClickHandler = () => {
      props.callBack()
   }

   return (
      <button onClick={onClickHandler}>{props.name}</button>
   );
};
