
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// The store that we created using the createStore method is an object which has some methods in it.
// One of those methods is called dispatch. This dispatch method accepts an object as it’s argument and 
// this object is what we call as ‘action’.
import { createStore } from 'redux';// import createStore


import { Provider } from 'react-redux';
/* The Provider component uses something called React Context which allows you to pass the store
object to any components that needs to access it without the need to pass props. */

import postReducer from './reducers/postReducer';
const store = createStore(postReducer);/* createStore method will allow us to create store and save it inside store
variable. This method needs a special argument and this argument goes by a special name called the ‘reducer’. */
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,/* Here we are wrapping the App component which is our parent component with the Provider component so 
that all the child components in our app can get access to the store. */
 document.getElementById('root'));