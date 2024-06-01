import React from 'react';
import logo from './shopping list.avif';
import './App.css';
import ShoppingList from './components/shoppingList';
import CarList from './components/CarComponent';
import StudentList from './components/table';
import Essay from './components/essay';
import Gallery from './components/gallery';
import Form  from './components/events/form';
import Football from './components/events/football';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esther's <code>Easter</code> ShoppingList.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <ShoppingList name='Easter' />
      <CarList name='mycars'/>
      <StudentList name='witi students'/>
      <Essay name='My Biography'/>
      <Gallery name='myGallery'/>
      <Form name='Form'/>
      <Football name='Football'/>

    </div>
  );
}

export default App;
