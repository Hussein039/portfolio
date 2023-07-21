import Header from "./components/css-components/navigations/header";
import HeroContainer from "./components/hero";
import Footer from './components/css-components/navigations/footer'
import Projects from "./components/projects";
import styles from './app.module.css';
import Contact from "./components/contact";
import About from "./components/about";

import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Skills from "./components/skills";

function App() {
  return (
    <BrowserRouter>
    <div className={styles.pageContainer}>
      <Header />
      
      <div className={styles.contentWrap}>
        <HeroContainer />
        <Projects />
        <About />
        <Skills />  
      </div>
      <Contact />
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
