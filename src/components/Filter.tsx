import React from "react";
import {filterType} from "../App";

type MoneyPropsType = {
   money: Array<PropsType>
   moneyFilter: (nameButton: filterType) => void
}

type PropsType = {
   banknots: string
   value: number
   number: string
}

export const Filter = (props: MoneyPropsType) => {

   return (
      <>
         <ul>
            {props.money.map((el, index) => {
               return (
                  <li key={index}>
                     <span>{el.banknots} </span>
                     <span>{el.value} </span>
                     <span>{el.number} </span>
                  </li>
               )
            })}
         </ul>
         <button onClick={() => {props.moneyFilter('All')}}>All</button>
         <button onClick={() => {props.moneyFilter('Rubls')}}>Rubls</button>
         <button onClick={() => {props.moneyFilter('Dollars')}}>Dollars</button>
      </>
   )
}