

export const TodoReducer = (state = { todos: [] }, action:any) => {
    switch (action.type) {
    case "ADD_TODO_SUCCESS":
    return {todos: [action.payload, ...state.todos] }; 
    //adds new todo to existing ones
    //action.payload is the new todo
    //we only passed the new todo from the action creator
    case "REMOVE_TODO_SUCCESS":
    return { todos: state.todos.filter((item:any)=> item !== action.payload) };
    //todo is already filtered in the action creator
    //so we just return the filtered todos which is action.payload
 
    default:
    return state;
    }
    };

