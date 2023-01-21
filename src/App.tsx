import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {Stydents} from "./components/Stydents";
import {Cars} from "./components/Cars";


function App() {
   let [students, setStudents] = useState([
      {id: 1, name: "Andrey", age: 30},
      {id: 2, name: "Ann", age: 19},
      {id: 3, name: "Jane", age: 29},
      {id: 4, name: "Igor", age: 27},
      {id: 5, name: "Valera", age: 25},
      {id: 6, name: "Max", age: 35},
      {id: 7, name: "Tim", age: 15},
      {id: 8, name: "An", age: 16},
      {id: 9, name: "Andrey", age: 15},
      {id: 10, name: "Rate", age: 24},
      {id: 11, name: "Kate", age: 25},
      {id: 12, name: "Pit", age: 26},
      {id: 13, name: "Mary", age: 26},
      {id: 14, name: "Ivan", age: 53}
   ]);

   // const [money, setMoney] = useState([
   //    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
   //    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
   //    {banknots: 'Rubls', value: 100, number: ' w1234567890'},
   //    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
   //    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
   //    {banknots: 'Rubls', value: 100, number: ' r1234567890'},
   //    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
   //    {banknots: 'Rubls', value: 50, number: ' v1234567890'},
   // ])

   return (
      <>
         <>{/*<Header title={'New Header'}/>*/}
            {/*<Body titleForBody={'New Body'}/>*/}
            {/*<Footer titleForFooter={'New Footer'}/>*/}</>
         <Stydents students={students}/>
         <Cars/>
      </>
   )
}

export default App;
