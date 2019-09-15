import React from 'react';
import DataCard from './DataCard';
import Filters from './Filters';

class DataList extends React.Component {
  render(){
    return (
      <main className="app-page">
        <Filters />
        <DataCard data={this.props.data} />      
      </main>
    );
  }}
  export default DataList;
