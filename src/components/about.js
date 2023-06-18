import styles from './css-components/about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3, faJs, faReact, faNode,   } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    
    return (
        <div id="about">
            <div className={styles.container}>
                <h1>About Me</h1>
                <div className={styles.aboutContainer}>
                    <div className={styles.text}>
                        <p>I'm a front-end developer graduated from Centennial College as a software engineer in 2022.
                        I have hands-on experience with .Net and Linux system. My interest in web development stems from my desire to continue learning and developing myself.
                        I love problem solving and figuring out ways to tackle an issue.</p>
                    </div>
                    <ul className={styles.skillsList}>
                            {/* <li ><FontAwesomeIcon icon={faHtml5} className={styles.icon} /> </li> */}
                            {/* <li ><FontAwesomeIcon icon={faCss3} className={styles.icon} /></li> */}
                            {/* <li ><FontAwesomeIcon icon={fas} className={styles.icon} /></li> */}
                            {/* <li ><FontAwesomeIcon icon={faReact} className={styles.icon} /></li> */}
                            {/* <li ><FontAwesomeIcon icon={faReact} className={styles.icon} /></li> */}
                        {/* <li ><FontAwesomeIcon icon={faNode} className={styles.icon} /></li> */}
                        <li><img src={require('../images/html-5.png')} alt="html" ></img></li>
                        <li><img src={require('../images/css.png')} alt="css" ></img></li>
                        <li><img src={require('../images/c-sharp.png')} alt="c#" ></img></li>
                        <li><img src={require('../images/js.png')} alt="JavaScript" ></img></li>
                        <li><img src={require('../images/react.png')} alt="Reactjs" ></img></li>
                        <li><img src={require('../images/reactnative.png')} alt="React-Native" ></img></li>
                        <li><img src={require('../images/nodejs.png')} alt="Nodejs" ></img></li>
                        <li><img src={require('../images/sql.png')} alt="sql" ></img></li>
J
                        </ul>
                </div>
                       
            </div>
        </div>
    )
};

export default About;