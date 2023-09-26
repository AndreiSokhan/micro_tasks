import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {

   return (
      <>
         <Header titleForHeader={"New title"}/>
         <Body titleForBody={"New BODY"}/>
         <Footer titleForFooter={"New Footer"}/>
      </>
   );
};

export default App;
