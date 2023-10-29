import React from 'react';
import {Button} from "./Button";

export const YouTubeCh = () => {

   const Button_1_Foo = (subscriber: string, age: number) => {
      console.log(subscriber, age)
   }
   const Button_2_Foo = (subscriber: string) => {
      console.log(subscriber)
   }
   const Button_3_Foo = () => {
      console.log("styp")
   }

   return (
      <div>
         <Button name={'My youTube chanel-1'} callBack={() => Button_1_Foo("vasia", 21)}/>
         <Button name={'My youTube chanel-2'} callBack={() => Button_2_Foo("Ivan")}/>
         <Button name={"Styp"} callBack={Button_3_Foo}/>
      </div>
   );
};
