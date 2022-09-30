import styles from'./css-components/contact.module.css'

const Contact = () => {
    
    return (
        <div>
            <div className={styles.container}>
                <h1>Get In Touch</h1>
                <div className={styles.info}>
                    <span className={styles.email}>Email To: </span> <span className={styles.emailto}><a href='mailto:husseinsaad123123@gmail.com'>Click To Email</a></span>
                    <p>Email: husseinsaad123123@gmail.com</p>
                    <button className={styles.resdownload}><a href='./Files/Resume.docx' download>Download Resume</a></button>
                </div>
            </div>
        </div>
    )
};

export default Contact;