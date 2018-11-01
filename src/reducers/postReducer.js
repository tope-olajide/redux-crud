const postReducer = (state = [], action) => { // reducer is a function that takes the current state and an action that was dispatched as it’s parameters and returns the new state.
  switch(action.type) {
    case 'ADD_POST': // if action.type = ADD_POST, add the action.data to the state without mutating it
      return state.concat([action.data]);
    case 'DELETE_POST': // if action.type = DELETE_POST, for each post in the state object, return post.id that is not
    // not equal to action.id; thereby removing post that is equal to action.id
      return state.filter((post)=>post.id !== action.id);
    case 'EDIT_POST': // if action.type = EDIT_POST i.e if editpost is trigggered, change...
    //... change post.editing from its current boolean state (i.e from truth to false and vise versa), else return post
      return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)

    case 'UPDATE': // if action.type = UPDATE, 
      return state.map((post)=>{ // if any post in state id === action.id, return the rest of the post with the modified version of the new post
        if(post.id === action.id) {
          return {
             ...post,
             title:action.data.newTitle,
             message:action.data.newMessage,
             editing: !post.editing
          }
        } else return post;
      })
    default:
      return state;
  }
}
export default postReducer;