import React from 'react';

class DataCard extends React.Component {
  render() {
    return (
      <div className="box box-cards">
      <ul className="data-list">
        {this.props.data.map((data, index) =>{
          return (
            <div className="data-card" >
              <li className="card-name" key={index}>Nombre: {data.name}
              </li>
              <li className="card-email" key={index}>Email: {data.email}
              </li>
              <li className="card-passwords" key={index}>Contraseñas: 
                <ul className="passwords-list"> 
                {data.passwords.map((password, indexPassword) => {
                  return(
                  <React.Fragment>
                    <li className="passwords__list" key={indexPassword}>{password}
                    </li>
                  </React.Fragment>
                )})}
                </ul>
              </li>
              
              <li className="card-bank" key={index}>
                Banco:
                <ul className="card-bank-list"> 
                      <React.Fragment>
                        <li className="bank__list-iban" key={index}>
                        iban: {data.bank.iban}
                        </li>
                        <li className="bank__list-pin" key={index}>
                        pin: {data.bank.pin}
                        </li>
                      </React.Fragment> 
                    {
                  }
                </ul> 
              </li>
            </div>
          );
        })}
      </ul>
      </div>
    );
  }
 }
         

export default DataCard;