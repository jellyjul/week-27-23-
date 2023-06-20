import React from 'react';

import Tarif from '../Tarif/Tarif';
import styles from  '../Tarif/Tarif.module.scss'
import tarifs from '../data/data.json'

// const tarifs = [
//   {
//     name: "300",
//     speed:"10",
//     background:"red"
//   },{
//     name: "450",
//     speed:"50",
//     background:"blue"
//   },{
//     name: "550",
//     speed:"100",
//     background:"green",
//     isSelected: true
//   }, {
//     name: "1000",
//     speed:"200",
//     background:"yellow"
//   }]

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={this.props.theme.App}>
        {tarifs.map((tarif,index )=>
          <Tarif 
          key={index} 
          name={tarif.name} 
          speed= {tarif.speed} 
          colorOne = {tarif.colorOne}
          colorTwo = {tarif.colorTwo}
          isSelected = {tarif.isSelected} />)}
        </div>
    </div>
  );
}
}

export default App;



