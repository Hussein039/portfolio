import styles from'./css-components/hero.module.css'


const HeroContainer = () => {
	

    return(
        <div>
			<div class={styles.container}>
					
			  <div class={styles.textbox}>
			    <h2>Hussein Hussein</h2>
			    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fuga nobis nihil libero eveniet aperiam ex repudiandae praesentium quaerat cum excepturi, quas fugit. Et odio repudiandae ea quibusdam vero consectetur, nemo, ullam perspiciatis laudantium obcaecati.</p>
					<a href="#">Contact Me</a>
					<a href='#'>Projects</a>
			  </div>
					
				<div class={styles.bgimg}>
					<div className={styles.bgimgcolor}>
			    		<img src='../images/myphoto.png' alt=""></img>
					</div>
			  </div>
			</div>

        </div>
    )
}



export default HeroContainer;