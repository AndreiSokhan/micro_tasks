import React from 'react';
import {FilterType} from "../App";

type MoneyFilterPropsType={
   money:Array<moneyPropsType>
   onClickFilterHandler:(nameButton: FilterType)=>void
}

type moneyPropsType={
   banknots: string
   value: number
   number: string
}

export const MoneyFilter = (props:MoneyFilterPropsType) => {
   return (
      <>
         <ul>
            {props.money.map((ban, index) => {
               return (
                  <li key={index}>
                     <span> {ban.banknots}</span>
                     <span> {ban.value}</span>
                     <span> {ban.number}</span>
                  </li>
               )
            })}
         </ul>
         <div>
            <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
            <button onClick={() => props.onClickFilterHandler('RUBLS')}>RUBLS</button>
            <button onClick={() => props.onClickFilterHandler('All')}>All</button>
         </div>
      </>
   );
};

