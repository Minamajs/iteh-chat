import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

function App() {
  const [poruke, setPoruke] = useState([]);
  const dodajPoruku = (text, prvi) => {
    setPoruke(prev => {
      return [...prev, {
        prvi: prvi,
        text: text
      }]
    })
  }
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path='/prvi'>
          <Chat prvi={true} poruke={poruke} dodajPoruku={dodajPoruku} />
        </Route>
        <Route path='/drugi'>
          <Chat prvi={false} poruke={poruke} dodajPoruku={dodajPoruku} />
        </Route>
        <Route path='/'>
          <Redirect to='/prvi' />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
