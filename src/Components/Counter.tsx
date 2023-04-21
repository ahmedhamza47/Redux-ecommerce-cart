import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ADD_COUNTER,
  MIN_COUNTER,
  RESET_COUNTER,
} from "../Redux/Counter/Action";
import { useDispatch, useSelector } from "react-redux";
const Counter = ({ count }: any) => {
  const dispatch = useDispatch();
  //const count = useSelector((state:any) => state.counterApp.counter);

  const add = () => {
    dispatch({ type: ADD_COUNTER });
  };

  const less = () => {
    if (count > 0) {
      dispatch({ type: MIN_COUNTER });
    }
  };

  const reset = () => {
    dispatch({ type: RESET_COUNTER });
  };

  return (
    <div>
      <button type="button" className="btn btn-outline-primary" onClick={add}>
        ADD +
      </button>
      <br></br>
      <button type="button" className="btn btn-outline-danger" onClick={less}>
        SUBSTRACT -
      </button>
      <br></br>
      <button type="button" className="btn btn-outline-dark" onClick={reset}>
        reset counter to 100
      </button>
      <br></br>
      <br></br>
      <h1>counter : {count}</h1>
    </div>
  );
};

//connects component with redux store state
const mapStateToProps = (state: any) => ({ count: state?.counter?.counter });

//connect function INJECTS dispatch function as a prop!!
export default connect(mapStateToProps)(Counter);

// connect takes two arguments: mapStateToProps and mapDispatchToProps (optional)
// mapStateToProps is a function that takes the state of the store and returns an object
// that will be passed as props to the component (in this case, the todo component) i.e.Counter = ({count}:any)

//we dont have to use useSelector when we use the object return by mapStateToProps
