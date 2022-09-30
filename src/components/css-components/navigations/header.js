import React, {useState} from 'react';
import styles from'./header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Header = () =>{
    const[click, setClick] = useState(false);

    const handleClick = () =>{
        setClick(!click);
    }

    return(
        <div>
            
           <div className={styles.header}>
                <ul className={click ? styles.mobileview : styles.listitems}>
                    {/* <h1 className={styles.moblogo}>Hussein Hussein</h1> */}
                    <li className={styles.logo}>Hussein Hussein</li>
                    <li>< a href='#'>Home</a></li>
                    <li>< a href='#'>About</a></li>
                    <li>< a href='#'>Contact</a></li>
                    <i className={click?`${styles.icona}fa-solid fa-x`:`${styles.icon} fa-solid fa-bars`} onClick={handleClick}></i>
                    {/* <FontAwesomeIcon icon={faBars}/> */}
                    
                </ul>
           </div>
        </div>
    )
};

export default Header;