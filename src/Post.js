import React, { Component } from 'react';

import {connect} from 'react-redux'; // import the connect() function provided by the react-redux library

class Post extends Component { // Post component will be rendered by its parent(AllPost.js). it is used to render the title, message, and edit and delete button
  render() {
  return (
    <div>
      <h2>{this.props.post.title}</h2> {/* This is going to display the title passed down by the parent*/}
      <p>{this.props.post.message}</p> {/* This is going to display the message passed down by its parent(AllPost) When this component is called*/}
      <button
       onClick={()=>this.props.dispatch({type:'EDIT_POST', id:this.props.post.id})}>
       {/* when this button is clicked, it will run an anonymous function that dispatch the following action: type and id; which will be recieved by the Postreducer */}
       Edit</button>
      <button 
      onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
       {/* when this button is clicked, it will run an anonymous function that dispatch the following action: type and id; which will be recieved by the Postreducer */}
      Delete</button>
    </div>
  );
 }
}
export default connect()(Post); // connect() function  is used to connect this Post component to our store so that we can dispatch actions