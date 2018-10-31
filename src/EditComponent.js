import React, { Component } from 'react';
import { connect } from 'react-redux'; // import the connect() function provided by the react-redux library


class EditComponent extends Component { 
// this component will be rendered if 'editing' key in the data object is true
handleEdit = (e) => { //run this  function when the form is submitted
  e.preventDefault(); //prevent the default behaviour of the form
  const newTitle = this.getTitle.value; // input value
  const newMessage = this.getMessage.value; // textarea value
  const data = { // data is an object that holds the input values
    newTitle,
    newMessage
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data }) // dispatch method will dispatch the following action to postReducer: type and id
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}> {/* this will call the handledEdit method when the form is submitted */}
    <input required type="text" ref={(input) => this.getTitle = input}/* Collect the input value */
    defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}/* Collect the textarea value */
    defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);// connect() function  is used to connect this PostForm component to our store so that we can dispatch actions