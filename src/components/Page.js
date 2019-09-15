import React from 'react';
// import data from '.././data';
import Header from './Header';
import DataList from './DataList';
import Footer from './Footer';

class Page extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Header />
        <DataList data={this.props.data}/>
        <Footer />
      </React.Fragment>
    );
  }}


  export default Page;
