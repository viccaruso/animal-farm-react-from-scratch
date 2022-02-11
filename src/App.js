import React, { Component } from 'react';
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { animals } from './data';

// function App() {
//   return (
//     <div className='App'>
//       <Header greeting='Alchemy Animal Farm' />
//       <Main animals={animals}/>
//       <Footer email='fake.email@fakedomain.com' />
//     </div>
//   );
// }

// export default App;


export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header greeting='Alchemy Animal Farm' />
        <Main animals={animals} />
        <Footer email='fake.email@fakedomain.com' />
      </div>
    );
  }
}