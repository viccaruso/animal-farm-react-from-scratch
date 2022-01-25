import './App.css';
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { animals } from './data';

function App() {
  return (
    <div className='App'>
      <Header text='Alchemy Animal Farm' />
      <Main />
    </div>
  );
}

export default App;
