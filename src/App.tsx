import React, {useState} from 'react';
import './App.css';
import './site/Header'
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./components/NewComponent";

function App() {
   let [students, setStudents] = useState([
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
      {id: 13, name: "fjfj", age: 26},
      {id: 14, name: "JFJDfo", age: 53}
   ]);

   return (
      <>
         {/*<Header title={'New Header'}/>*/}
         {/*<Body titleForBody={'New Body'}/>*/}
         {/*<Footer titleForFooter={'New Footer'}/>*/}
         <NewComponent students={students}/>
      </>
   )
}

export default App;
