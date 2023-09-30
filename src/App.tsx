import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./components/NewComponent";
import {log} from "util";
import {Button} from "./components/Button";


type FilterType= 'All' | 'RUBLS' | 'Dollars'

function App() {

   let [students, setStudents] = useState([
      {id: 1, name: "Alex", age: 8},
      {id: 2, name: "Max", age: 19},
      {id: 3, name: "Mark", age: 26},
      {id: 4, name: "Gleb", age: 18},
      {id: 5, name: "Olia", age: 14},
      {id: 6, name: "Dasha", age: 23},
      {id: 7, name: "Sofa", age: 6},
      {id: 8, name: "Oleg", age: 8},
      {id: 9, name: "Igor", age: 12},
      {id: 10, name: "Thomas", age: 15},
      {id: 11, name: "John", age: 22},
   ]);
   let topCars = [
      {manufacturer: 'BMW', model: 'm5cs'},
      {manufacturer: 'Mercedes', model: 'e63s'},
      {manufacturer: 'Audi', model: 'rs6'}
   ]
   const [money, setMoney] = useState([
      {banknots: 'Dollars', value: 100, number: ' a1234567890'},
      {banknots: 'Dollars', value: 50, number: ' z1234567890'},
      {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
      {banknots: 'Dollars', value: 100, number: ' e1234567890'},
      {banknots: 'Dollars', value: 50, number: ' c1234567890'},
      {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
      {banknots: 'Dollars', value: 50, number: ' x1234567890'},
      {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
   ])

   const Button_1_Foo = (subscriber: string, age: number) => {
      console.log(subscriber, age)
   }
   const Button_2_Foo = (subscriber: string) => {
      console.log(subscriber)
   }
   const Button_3_Foo = () => {
      console.log("styp")
   }

   // let a = 1
   let [a, setA] = useState(1)

   const onClickHandler = () => {
      setA(++a)
      console.log(a)
   }
   const onClickHandlerRest = () => {
      setA(0)
   }

   const [filter, setFilter] = useState<FilterType>('All')

   let currentMoney = money;
   if (filter === 'RUBLS') {
      currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS');
   }
   if (filter === 'Dollars') {
      currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars');
   }

   const onClickHandlerFilter = (nameButton: FilterType) => {
      setFilter(nameButton)
   }


   return (
      <div>
         <h3>{a}</h3>
         <button onClick={onClickHandler}>number</button>
         <button onClick={onClickHandlerRest}>rest</button>

         <div>
            <Button name={'My youTube chanel-1'} callBack={() => Button_1_Foo("vasia", 21)}/>
            <Button name={'My youTube chanel-2'} callBack={() => Button_2_Foo("Ivan")}/>
            <Button name={"Styp"} callBack={Button_3_Foo}/>
         </div>

         <ul>
            {currentMoney.map((ban, index) => {
               return (
                  <li key={index}>
                     <span>{ban.banknots}</span>
                     <span>{ban.value}</span>
                     <span>{ban.number}</span>
                  </li>
               )
            })}
         </ul>
         <button onClick={() => onClickHandlerFilter('Dollars')}>Dollars</button>
         <button onClick={() => onClickHandlerFilter('RUBLS')}>RUBLS</button>
         <button onClick={() => onClickHandlerFilter('All')}>All</button>


         <NewComponent students={students} topCars={topCars}/>
      </div>
   );
};

export default App;
