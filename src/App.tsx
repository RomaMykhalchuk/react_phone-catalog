import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './App.scss';

const App = () => (
  <div className="App">
    <HashRouter>
      <Header />
      <Route path="/" exact />
      <Route path="/phones" />
      <Route path="/accesories" />
      <Route path="/tablets" />
      <Route path="/accesories" />
      <Footer />
    </HashRouter>
  </div>
);

export default App;
