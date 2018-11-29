import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';



var SearchContainer = () => {

//Search.js is our component that we want to connect to
//handleSearchChange is our dispatch action creator
//mapStateToProps... handleInputChange accepts state
  connect(Search.handleInputChange, handleSearchChange)(Search);

};



//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
