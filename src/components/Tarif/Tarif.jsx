import React, { useState } from 'react';
import styles from './Tarif.module.scss'
import classNames from 'classnames';

// выделяются все тарифы, как сделать чтобы выделялся только один?
// colorOne and colorTwo оба не работают, в консоли отрисовывается значение селекторов, но не могу понять почему не работает
class Tarif extends React.Component {
    constructor(props) {
                super(props);
                this.state = {
                    pressed:false
                }
            }
    
        handleChange = () => {
            this.setState(
                {pressed: !this.state.pressed})
        }
    render(){
        const {name, speed,colorOne,colorTwo}= this.props;
        const selected = classNames([styles.tarifCard, this.state.pressed ?  ` ${styles.selected}`:'']);
        const firstColor = classNames([`${colorOne}`, styles.tarifName]);
        const secondColor = classNames([`${colorTwo}`, styles.tarifMain ])
        return (
            
    <div onClick={this.handleChange} className={selected} >
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





//  если писать на функциональном компоненте, не могу найти ошибку


// export default function Tarif(name, speed,colorOne,colorTwo) {


//     const [clicked, setClicked] = useState(true);
//     const handleChange = () => {
//         setClicked(!clicked);
//     };
//     const selected = classNames([styles.tarifCard, clicked ? ` ${styles.selected}`:'']);
//     const firstColor = classNames([`${colorOne}`, styles.tarifName]);
//     const secondColor = classNames([`${colorTwo}`, styles.tarifMain ])
    
// return (
            
//     <div onClick={handleChange} className={selected} >
//             <div className={firstColor}> Безлимитный {name}</div> 
//             <div className={secondColor}  >руб: 
//                 <span className={styles.tarifSubtitle}> {name}</span>  /мес
//             </div>
//             <div className={styles.tarifSpeed}>До {speed} Мб/сек
//             </div>
//             <div className={styles.tarifVolume}>  Объем включенного трафика не ограничен
//             </div>
//     </div>)}
//     ;



