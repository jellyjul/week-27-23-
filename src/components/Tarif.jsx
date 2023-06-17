import React from 'react';
import  './Tarif.css'


class Tarif extends React.Component {
    render(){
        const {name, speed}= this.props;
        return (
    <div className="tarif-card">
            <div className="tarif__name"> Безлимитный {name}</div>
            <div className="tarif__main">руб: 
                <span className="tarif__subtitle"> {name}</span>  /мес
            </div>
            <div className="tarif__speed">До {speed} Мб/сек
            </div>
            <div className="tarif__volume">  Объем включенного трафика не ограничен
            </div>
    </div>)}
}
export default Tarif;
