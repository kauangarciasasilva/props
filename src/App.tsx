import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonB from './modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Click from './botton';
interface Props{
  
}
interface State{
  showModal:boolean;
}
export default class App extends React.Component<Props,State> {
  constructor(props:Props) {
    super(props);
    this.state = { showModal: false };
    
  }
  
  handleOpenModal() {
    
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }
  handleOpenModalConfirm() {
    
    const { showModal } = this.state;
    console.log('confirmou')
    this.setState({ showModal: !showModal });
  }

  render(){
     return (
    <div className="App">
      <header className="App-header">
        <Click  showModal={this.state.showModal} 
        handleOpenModal={()=>this.handleOpenModal()}
         handleOpenModalConfirm={()=>this.handleOpenModalConfirm()}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
 
}

