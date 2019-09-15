import React from 'react';
import './App.css';
import data from './data';
import {isTemplateElement} from '@babel/types';
// import Page from './components/Page';

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
        {/* <Page data={this.state.data}/> */}
        <header className="app-header">
        <h1 className="header-title">Legion of Hell</h1>
        </header>
        <main>
          <ul className="data-list">
            {data.map((data, index) =>{
              return (
                <div className="data-card" >
                  <li className="card-name" key={index}>Nombre: {data.name}</li>
                  <li className="card-email" key={index}>Email: {data.email}</li>
                  <li className="card-passwords" key={index}>Contraseñas: 
                    <ul className="passwords-list"> 
                    {data.passwords.map(password => {
                      return(
                      <React.Fragment>
                        <li className="passwords__list" key={index}>{password}</li>
                      </React.Fragment>
                    )})}
                    </ul>
                  </li>
                  
                  {/* <li className="card-bank" key={index}>
                    <ul className="card-bank-list"> 
                    
                    
                     {data.bank.map((item, index) =>{
                        return (
                          <div>
                            <li className="bank__list-iban" key={index}>{item.iban}
                            </li>
                            <li className="bank__list-pin" key={index}>{item.pin}
                            </li>
                          </div> 
                        ); 
                    } )} 
                    </ul>
                  </li> */}
                </div>
              )
            }
            )}
          </ul>
        </main>
        <footer className="app-footer">
        <h2 className="footer-title">loh();</h2> 
        </footer>
      </div>
    );
  }
}

export default App;
