import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./components/NewComponent";

function App() {

   let [students, setStudents] = useState( [
      {id:1, name:"Alex", age:8 },
      {id:2, name:"Max", age:19 },
      {id:3, name:"Mark", age:26 },
      {id:4, name:"Gleb", age:18 },
      {id:5, name:"Olia", age:14 },
      {id:6, name:"Dasha", age:23 },
      {id:7, name:"Sofa", age:6 },
      {id:8, name:"Oleg", age:8 },
      {id:9, name:"Igor", age:12 },
      {id:10, name:"Thomas", age:15 },
      {id:11, name:"John", age:22 },
   ]);

   let topCars = [
      {manufacturer:'BMW', model:'m5cs'},
      {manufacturer:'Mercedes', model:'e63s'},
      {manufacturer:'Audi', model:'rs6'}
   ]

   return (
      <>
         <NewComponent students={students} topCars={topCars}/>
      </>
   );
};

export default App;
