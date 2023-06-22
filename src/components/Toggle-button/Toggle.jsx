import React, { useState } from 'react';
import classNames from 'classnames';
import styles from "../Toggle-button/Toggle.module.scss"
import sun from "../../images/sun.png"
import moon from "../../images/moon.jpg"


export default function Toggle() {
    const [isClicked, setisClicked] = useState(false);
    const handleClick = () => {
        setisClicked(!isClicked)
    }

    return (
    <div>
    <div className={styles.container}>
    <button onClick={handleClick} className={`${isClicked?styles.day:styles.night}`}>
    {isClicked? <img src={sun} style={{width: '20%'}}/>
            :<img src={moon} style={{width: '20%'}} />}
    {isClicked? "Day":"Night"}
    </button>
    </div>
    </div>
);
}