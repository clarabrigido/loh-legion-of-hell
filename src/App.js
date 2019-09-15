import React from 'react';
import './App.css';
import data from './data';
import Page from './components/Page';


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
