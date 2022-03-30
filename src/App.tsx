import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {NewComponent} from "./site/NewComponent";
import {Footer} from "./site/Footer";
import {AutoComponent} from "./site/AutoComponent";
import {Button} from "./components/Button";

function App() {

    let [students, setStudents] = useState([
        {id: 1, name: "Janes", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Cristopher", age: 108},
    ]);

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    //Стейт для отработки метода filter:
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const Button1Foo = (subscriber: string, age:number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string, age:number) => {
        console.log(subscriber, age)
    }

    return (
        <>
            {/*<Header title={'New TITLE'}/>*/}
            {/*<Body title={'New BODY'}/>*/}
            {/*<NewComponent students={students}/>*/}
            {/*<AutoComponent topCars={topCars}/>*/}
            {/*<Footer title={'New FOOTER'}/>*/}
            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('Vasya', 55)}/>
            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button2Foo ('Ivan', 55)}/>
        </>
    );
}

export default App;
