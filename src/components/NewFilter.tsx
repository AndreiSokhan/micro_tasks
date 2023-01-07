import React from 'react';

type NewFilterPropsType={
    money:Array<MoneyPropsType>
   currentMoney:()=>void
   onClickFilterHandler:()=>void
}

type MoneyPropsType={
   banknots:string
   value:number
   number:string
}

export const NewFilter = (props:NewFilterPropsType) => {
   return (
      <div>
         <ul>
            {props.currentMoney.map((el,index)=>{
               return(
                  <li key={index}>
                     <span> {el.banknots} </span>
                     <span> {el.value} </span>
                     <span> {el.number }</span>
                  </li>
               )
            })}
         </ul>
         <div style={{marginLeft: '35 px'}}>
            <button onClick={()=>{props.onClickFilterHandler('All')}}>All</button>
            <button onClick={()=>{props.onClickFilterHandler('Rubls')}}>Rubls</button>
            <button onClick={()=>{props.onClickFilterHandler('Dollars')}}>Dollars</button>
         </div>
      </div>
   );
};

