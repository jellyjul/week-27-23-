import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tarif from '../Tarif/Tarif';
import styles from  '../Tarif/Tarif.module.scss'
import tarifs from '../data/data.json'
import Button from '../Button/Button'
import stylesButton from "../Button/button.module.scss"


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
        <Button name = {'Click on me'} title ="button" className={stylesButton.test}></Button>
    </div>
  );
}
}

export default App;



