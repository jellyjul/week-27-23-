import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tarif from '../Tarif/Tarif';
import tarifs from '../../data/data.json'
import Button from '../Button/Button'
import Toggle from "../Toggle-button/Toggle"
import {ThemeProvider} from "styled-components";
import global from "../..//../src/index.module.scss"

const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: 'linear-gradient(#39598A, #79D7ED)'}
const darkTheme = {
      body: '#363537',
      text: '#FAFAFA',
      toggleBorder: '#6B8096',
      background: '#999',
  }

export default function App() {
  const [theme, setTheme] = useState('light');

        const themeToggler = () => {
          setTheme === 'light' ? setTheme('dark') : setTheme('light')
        };
        const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return(


    <ThemeProvider theme={themeMode} >
      <div>
        <Toggle onClick={themeToggler} ></Toggle>
        <div className={global.container}>
        {tarifs.map((tarif,index )=>
          <Tarif 
          key={index} 
          name={tarif.name} 
          speed= {tarif.speed} 
          colorOne = {tarif.colorOne}
          colorTwo = {tarif.colorTwo}
          isSelected = {tarif.isSelected} />)}
        </div>
        <Button name = {'Click on me'} title ="button" ></Button>
    </div>
    </ThemeProvider>
  );
}


// function App() {
//   const [counter, setCounter] = useState();

//   return (
//     <div className={style.app}>
//     {
//       data.map((plan) =>
//       <Plan
//       key = {plan.id}
//       id = {plan.id}
//       colorOne = {plan.colorOne} 
//       colorTwo ={ plan.colorTwo} 
//       price = {plan.price} 
//       speed = {plan.speed}
//       info = {plan.info}
//       isSelected = {plan.id === counter}
//       counter = {counter}
//       setCounter = {setCounter}
//       />  
//       )
//     }
//     </div>
//   );
// }
