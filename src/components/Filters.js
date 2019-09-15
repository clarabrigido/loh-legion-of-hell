import React from 'react';

class Filters extends React.Component {
  render(){

  //   checkEmail = event => {
  //     const elementKey = event.target.name;
  //     this.setState({
  //       [elementKey]: event.target.value,
  //   });
  // }

    return(
      <div className="box box-filters">
        <input type="text" className="input-search" onChange={this.checkEmail}/>
        <p className="results"></p>
      </div>
    );
  }
}

export default Filters;