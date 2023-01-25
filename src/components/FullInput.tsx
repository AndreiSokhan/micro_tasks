import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
   addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {

   let [title, setTitle] = useState('')

   // const addMessageHandler=()=>{
   //    props.addMessage(title)
   //    setTitle('')
   // }


   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value)
   }
   const onClickHandler = () => {
      props.addMessage(title)
      setTitle('')
   }


   return (
      <div>
         <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
         </div>
      </div>
   );
};