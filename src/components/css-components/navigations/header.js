import React, {useState} from 'react';
import styles from'./header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {

    const[click, setClick] = useState(false);

    const handleClick = () =>{
        setClick(!click);
    }

    return(
        <div>
            
           <div className={styles.header}>
                <ul className={click ? styles.mobileview : styles.listitems}>
                    {/* <h1 className={styles.moblogo}>Hussein Hussein</h1> */}
                    <li className={styles.logo}>Hussein <span className={styles.dot}>.</span></li>
                    <li>
                        <Link to="#home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="#about">
                            About
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="#contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="#projects">
                            My Work
                        </Link>
                    </li>
                    <i className={click? `${styles.icona}fa-sharp fa-solid fa-x` : `${styles.icon} fa-solid fa-bars`} onClick={handleClick}></i>
                    {/* <FontAwesomeIcon icon={faBars}/> */}
                    {/* <FontAwesomeIcon icon={faBars}/> */}
                    
                </ul>
            </div>
        </div>
    )
};

export default Header;