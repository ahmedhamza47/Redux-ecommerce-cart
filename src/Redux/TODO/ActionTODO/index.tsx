export const AddTodoAction = (todo:any) => (dispatch:any) => {
  dispatch({
    type: "ADD_TODO_SUCCESS",
    payload: todo,
  });
};

export const RemoveTodoAction = (todo:any) => (dispatch:any, getState:any) => {
  const {
    todo: { todos },
  } = getState(); 
  //getState() returns the current state of the store
  //we can use it to get the current state of the store and use it in our action creator
  // todo
  
  
  dispatch({
    type: "REMOVE_TODO_SUCCESS",
    payload: todo//
  });
};