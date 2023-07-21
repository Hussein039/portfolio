import styles from './css-components/skills.module.css'

const Skills = () => {
    
    return (
        <div className={styles.container}>
            <span className={styles.skillsec}>Skills</span>
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
                        </ul>
        </div>
    );
} 

export default Skills;