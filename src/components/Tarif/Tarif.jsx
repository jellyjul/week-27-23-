import React from 'react';
import styles from './Tarif.module.scss'
import classNames from 'classnames';




class Tarif extends React.Component {
    render(){
        const {name, speed,colorOne,colorTwo, isSelected}= this.props;
        const selected = classNames([styles.tarifCard, isSelected? ` ${styles.selected}`:'']);
        const firstColor = classNames([`${colorOne}`, styles.tarifName]);
        const secondColor = classNames([`${colorTwo}`, styles.tarifMain ])
        return (
            
    <div className={selected} >
            <div className={firstColor}> Безлимитный {name}</div> 
            <div className={secondColor}  >руб: 
                <span className={styles.tarifSubtitle}> {name}</span>  /мес
            </div>
            <div className={styles.tarifSpeed}>До {speed} Мб/сек
            </div>
            <div className={styles.tarifVolume}>  Объем включенного трафика не ограничен
            </div>
    </div>)}
}
export default Tarif;


// //colorOne and colorTwo оба не работают, в консоли отрисовывается значение селекторов, но не могу понять почему не работает