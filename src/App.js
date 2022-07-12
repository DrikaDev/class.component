import './App.css';
import React, {Component} from 'react';
import { render } from '@testing-library/react';

class App extends Component{

  render(){
    return(
      <>
      <h1>Fazendo uma 'Class Component'</h1>
      <p>Pra fazer uma 'class compontent', não precisa necessariamente fazer State, certo?</p>
      </>
    )
  }
}

export default App;