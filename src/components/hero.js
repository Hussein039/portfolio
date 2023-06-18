import styles from'./css-components/hero.module.css'


const HeroContainer = () => {
	

    return(
        <div id="home">
			<div class={styles.container}>
					
			  <div class={styles.textbox}>
			    <h2>Hussein Hussein</h2>
			    <p>Hello! I'm a front-end developer strongly focused on creating and developing beautiful and functional websites.</p>
					<a href="#">Contact Me</a>
					<a href='#'>Projects</a>
			  </div>
					
				<div class={styles.bgimg}>
					<div className={styles.bgimgcolor}>
			    		<img src={require('../images/my-img1.png')} alt="My-0Photo" ></img>
					</div>
			  </div>
			</div>
			
        </div>
    )
}



export default HeroContainer;