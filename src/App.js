import Header from "./components/css-components/navigations/header";
import HeroContainer from "./components/hero";
import Footer from './components/css-components/navigations/footer'
import Projects from "./components/projects";
import styles from './app.module.css';
import Contact from "./components/contact";

function App() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.contentWrap}>

      <HeroContainer />
        <Projects />
        <Contact />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
