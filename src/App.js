import { React } from 'react';
import '../src/assets/style/index.scss';
import '../src/assets/icons/style.scss';
import '../src/assets/icons2/style.scss';
import '../src/assets/skills-icons/style.scss'
import Header from './components/header';
import Router from './router';
import Footer from './components/footer';
const  App = () => {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
