import React, { useState } from 'react';
import styles from './Tarif.module.scss'
import classNames from 'classnames';

// В компоненте Tarif вы используете локальное состояние pressed, чтобы отслеживать, выделен ли тариф. 
// Сейчас, каждый тариф имеет своё собственное состояние, поэтому они могут быть выделены независимо друг от друга. 
// Один из способов сделать то, что вы хотите, это хранить внешнее состояние, которое указывает на текущий выбранный тариф в компоненте App. 
// Затем передавать это состояние в каждый компонент Tarif в качестве пропса, чтобы они знали, должны ли они быть выделены или нет.


//    ФУНКЦИОНАЛЬНЫЙ КОМПОНЕНТ

export default function Tarif({name, speed,colorOne,colorTwo,isSelected}) {
    const [clicked, setClicked] = useState(false);
    const handleChange = () => {
        setClicked(!clicked);
    };
    const selected = classNames([styles.tarifCard, clicked ? ` ${styles.selected}`:'']);
    const firstColor = classNames(styles.tarifName, styles[colorOne]);
    const secondColor = classNames(styles.tarifMain, styles[colorTwo]);

return (

    <div onClick={handleChange} className={selected} >
            <div className={firstColor}> Безлимитный {name}</div> 
            <div className={secondColor}  >руб: 
                <span className={styles.tarifSubtitle}> {name}</span>  /мес
            </div>
            <div className={styles.tarifSpeed}>До {speed} Мб/сек
            </div>
            <div className={styles.tarifVolume}>  Объем включенного трафика не ограничен
            </div>
    </div>)}
    ;


// КЛАССОВЫЙ КОМПОНЕНТ


// class Tarif extends React.Component {
//     constructor(props) {
//                 super(props);
//                 this.state = {
//                     pressed:false
//                 }
//             }

//         handleChange = () => {
//             this.setState(
//                 {pressed: !this.state.pressed})
//         }
//     render(){
//         const {name, speed,colorOne,colorTwo}= this.props;
//         const selected = classNames([styles.tarifCard, this.state.pressed ?  ` ${styles.selected}`:'']);
//         const firstColor = classNames([`${colorOne}`, styles.tarifName]);
//         const secondColor = classNames([`${colorTwo}`, styles.tarifMain ])
//         return (

//     <div onClick={this.handleChange} className={selected} >
//             <div className={firstColor}> Безлимитный {name}</div> 
//             <div className={secondColor}  >руб: 
//                 <span className={styles.tarifSubtitle}> {name}</span>  /мес
//             </div>
//             <div className={styles.tarifSpeed}>До {speed} Мб/сек
//             </div>
//             <div className={styles.tarifVolume}>  Объем включенного трафика не ограничен
//             </div>
//     </div>)}
// }
// export default Tarif;
