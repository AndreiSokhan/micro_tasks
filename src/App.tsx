import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {ArrStudents} from "./components/ArrStudents";
import {log} from "util";
import {Button} from "./components/Button";
import {Counter} from "./components/Counter";
import {YouTubeCh} from "./components/YouTubeCH";
import {MoneyFilter} from "./components/MoneyFilter";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {ButtonForInput} from "./components/ButtonForInput";

export type FilterType = 'All' | 'RUBLS' | 'Dollars'


function App() {

   // let [students, setStudents] = useState([
   //    {id: 1, name: "Alex", age: 8},
   //    {id: 2, name: "Max", age: 19},
   //    {id: 3, name: "Mark", age: 26},
   //    {id: 4, name: "Gleb", age: 18},
   //    {id: 5, name: "Olia", age: 14},
   //    {id: 6, name: "Dasha", age: 23},
   //    {id: 7, name: "Sofa", age: 6},
   //    {id: 8, name: "Oleg", age: 8},
   //    {id: 9, name: "Igor", age: 12},
   //    {id: 10, name: "Thomas", age: 15},
   //    {id: 11, name: "John", age: 22},
   // ]);

   // let topCars = [
   //    {manufacturer: 'BMW', model: 'm5cs'},
   //    {manufacturer: 'Mercedes', model: 'e63s'},
   //    {manufacturer: 'Audi', model: 'rs6'}
   // ]

   // const [money, setMoney] = useState([
   //    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
   //    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
   //    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
   //    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
   //    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
   //    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
   //    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
   //    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
   // ])

   //фильтрация денег по банкнотам
   // const [filter, setFilter] = useState<FilterType>('All')
   //
   // let currentMoney = money
   // if (filter === 'Dollars') {
   //    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
   // }
   // if (filter === 'RUBLS') {
   //    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
   // }
   //
   // const onClickFilterHandler = (nameButton: FilterType) => {
   //    setFilter(nameButton)
   // }

   let [message, setMessage] = useState([
      {message: 'message 1'},
      {message: 'message 2'},
      {message: 'message 3'},
   ])

   let [title, setTitle] = useState('')
   console.log(title)

   //функция addMessage для FullInput
   const addMessage=(title:string)=>{
      let newMassage={message: title};
      setMessage([newMassage, ...message])
   }

   const callBackButtonHandler = () => {
      addMessage(title)
      setTitle('')
   }

   return (
      <>
         {/*<Counter/>*/}
         {/*<YouTubeCh/>*/}
         {/*<ArrStudents students={students} topCars={topCars}/>*/}
         {/*<MoneyFilter*/}
         {/*   money={currentMoney}*/}
         {/*   onClickFilterHandler={onClickFilterHandler}*/}
         {/*/>*/}
         {/*<FullInput*/}
         {/*   addMessage={addMessage}*/}
         {/*/>*/}

         <Input
            setTitle={setTitle}
            title={title}
         />
         <ButtonForInput
            buttonName={'+'} callback={callBackButtonHandler}
         />

         {message.map((el, index) => {
            return (
               <div key={index}>{el.message}</div>
            )
         })}
      </>
   );
};

export default App;
