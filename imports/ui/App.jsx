import React from 'react';
import HelloContainer from './containers/HelloContainer' ;
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <HelloContainer/>
    <Info/>
  </div>
);
