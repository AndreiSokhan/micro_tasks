import React from "react";

type PropsButtonType = {
   name: string,
   callBack: () => void
}

export const Button = (props: PropsButtonType) => {

   const onClickhandler = () => {
      props.callBack()
   }

   return (
      <div>
         <button onClick={onClickhandler}>{props.name}</button>
      </div>
   );
}