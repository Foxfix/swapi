import React from 'react';
import Header from '../header';
import RandomPlanets from '../random-planet';
import PersonDetails from '../person-details';
import ItemList from '../item-list';

const App = (props) => {
  return (
    <div>
      <Header/>
      <RandomPlanets/>
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList/>
        </div>
        <div className="col-md-6">
        <PersonDetails/>
        </div>
      </div>

    </div>
  )
};

export default App;
