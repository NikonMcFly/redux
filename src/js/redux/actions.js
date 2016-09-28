
let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  },

  completeTodo: function(id) {
  	return {
  		type: 'COMPLETE_TODO',
  		id: id
  	}
  },

  deleteTodo: function(id) {
  	return {
  		type: 'DELETE_TODO',
  		id: id
  	}
  },

  createNewUserId: function() {
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 100)
    }
  },

  /*
  You have to use return "type": and could it back on
  on the dispatch! thats not it works.  
    ********
    return {
    type: 'Something here'
    }
    *********
  */
  increment: function(){
    return {
      type: 'INCREMENT_COUNTER'
    }
  },
  
  fetchUser: function() {
  return dispatch => {
      setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
       dispatch(increment());
      }, 3000);
    }
  }
}

export default actions
