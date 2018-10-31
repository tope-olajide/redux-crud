import React, { Component } from 'react';

import { connect } from 'react-redux'; // import the connect() function provided by the react-redux library

import Post from './Post';

import EditComponent from './EditComponent';

class AllPost extends Component {
    render() {
        return (
            <div>
                <h1>All Posts</h1>
                { this.props.posts.map((post) => (/* for each post in posts object(posts is the state object), do the following:
                if post.editing is true, render the EditComponent and pass down post object(from the map parameter above) to post EditComponent props
                else if post editing is false, render the Post component and pass down the each post(from the map parameter above) Post props. 
                */
                    <div key={post.id}>{/* Use the id of each post as the key; key is unique nd required by react to keep track of each item */}
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                )) }
            </div>
        );
    }
}
// mapStateToProps is used to get access to the state of this app.
// the argument is the state of the app.

const mapStateToProps = (state) => {
    return {
        posts: state // the posts object now hold the state of the app
    }
}
/* mapStateToProps is a function that takes in the state of our application as a parameter and returns an object
 with keys of that object becoming the props of the component so that whenever we use this.props.key_name we 
 get back the state we need. */


export default connect(mapStateToProps)(AllPost);
// In order to access our Redux store within our React components we use the special connect() function. 
// This function gives us access to dispatch and when we pass in mapStateToProps it gives us access to the state.