import React from 'react';
import styles from './Tarif.module.css'
import classNames from 'classnames';



class Tarif extends React.Component {
    render(){
        const {name, speed,colorOne,colorTwo, isSelected}= this.props;
        const container = classNames([`styles.${colorOne}`, styles.tarifCard, isSelected? ` ${styles.selected}`:'']);
        
        return (
            
    <div className={container}>
            <div className={styles.tarifName}> Безлимитный {name}</div> 
            <div className={styles.tarifMain}  >руб: 
                <span className={styles.tarifSubtitle}> {name}</span>  /мес
            </div>
            <div className={styles.tarifSpeed} styleName={colorTwo}>До {speed} Мб/сек
            </div>
            <div className={styles.tarifVolume}>  Объем включенного трафика не ограничен
            </div>
    </div>)}
}
export default Tarif;


// //colorOne and colorTwo оба не работают