import React, { Component } from 'react';
import {connect} from 'react-redux'; // import the connect() function provided by the react-redux library
class PostForm extends Component {
  handleSubmit = (e) => { // the used to handle the form submit event
    e.preventDefault(); // prevent default form behaviour
    const title = this.getTitle.value; // get and save getTitle input text and save into title variable
    const message =  this.getMessage.value; // get the textarea input value and save to message variable
    const data = { // data is an object that contains the following name: id, title, message, editing
      id: new Date(), // new Date is a unique value generated automatically; used as the id.
      title, 
      message,
      editing:false // a boolean value used to determine whether to render the the edit component form
    }
    /* The store that we created using the createStore method at index.js is an object which has some methods in it.
    Dispatch is on of those methods.This dispatch method accepts an object as it’s argument and this object is what we call as ‘action’
    the actions here are: type and data.
    This actions will be recieved by something called reducer 
    Reducer is a function that takes the current state and an action that was dispatched as it’s parameters and returns the new state*/
    this.props.dispatch({
      type:'ADD_POST',
      data});
    this.getTitle.value = ''; // reset the title input value 
    this.getMessage.value = ''; // reset the message textarea value
  }
render() {
return (
<div>
  <h1>Create Post</h1>
  <form onSubmit={this.handleSubmit}> {/* Call this method when the user submit the form */}
   <input required type="text" ref={(input)=>this.getTitle = input} // ref is used to reference the input value
    placeholder="Enter Post Title"/>
   <br /><br />
   <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28"
    placeholder="Enter Post" />
   <br /><br />
   <button>Post</button>
  </form>
</div>
);
}
}
export default connect()(PostForm); // connect() function  is used to connect this PostForm component to our store so that we can dispatch actions
// connect will ultimately return a new component which has the dispatch method as a prop.