import React from 'react';
import './App.css';
import data from './data';
// import Header from './components/Header';
import Page from './components/Page';
// import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data
    }
    console.log(data);
  }

  render() {
    return (
      <div className="App">
    
        <Page data={this.state.data}/>
       
      </div>
    );
  }
}

export default App;
