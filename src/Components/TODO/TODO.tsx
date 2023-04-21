import React, {Component, useEffect, useState} from 'react';
import {connect,} from 'react-redux'
import {AddTodoAction, RemoveTodoAction } from '../../Redux/TODO/ActionTODO';
import { useDispatch,useSelector } from 'react-redux';
    const TODO = ()=>{
     
        const dispatch  = useDispatch();
        const todoList = useSelector((state:any) => state.todo.todos);
        
        const [input, setInput] = useState<string>('')
        // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch({
  //     type: "ADD_TODO_SUCCESS",
  //     payload: todo,
  //   });
  // };

  // const { getState } = useStore();

  // const removeHandler = (t) => {
  //   console.log(t);
  //   const {
  //     Todo: { todos },
  //   } = getState();

  //   dispatch({
  //     type: "REMOVE_TODO_SUCCESS",
  //     payload: todos.filter((t) => todo !== t),
  //   });
  // };
        const handleSubmit = (e:any) => {
            e.preventDefault();
            dispatch(AddTodoAction(input) as any);
            setInput('') //clears input field
          };
        const deleteTodo = (todo:any) => {
            dispatch(RemoveTodoAction(todo) as any);
            };
        return (
            <div>
                <form onSubmit={handleSubmit} >

                <input type="text" value={input} placeholder='Enter a todo' onChange={(e)=> setInput(e.target.value)} />
                <button>Add</button>
                </form>

                <ul>
                    {todoList && todoList?.map((todo:any,index:any) => (
                        <li key={index}>
                            {todo}
                            <button onClick={()=>deleteTodo(todo)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }


//connects component with redux store state
const mapStateToProps = (state:any) => ({ TODO: state.todoReducer });

//connect function INJECTS dispatch function as a prop!!
export default connect(mapStateToProps)(TODO); // connect component to redux store
