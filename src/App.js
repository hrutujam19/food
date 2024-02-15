import logo from'./logo.svg';
import'./App.css';
import Body from './components/Body.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
const name="hrutuja";
function App(){
  return(
    <div className='App'>
    <header className='App-header'>
      {/* <img src={logo} className='App-logo'alt="logo"/>
      <p>
        Edit123 {name}<code>src/App.js</code> and save to reload.
      </p> */}
      <a className='App-link'
      href="https://react.js.org"
      target="_black"
      rel="noopener noreferrer">
      {/* Learn react */}
      </a>
    </header>
    <Header/>
    <Body/>
    <Footer/>
    </div>
  );
}
export default App;