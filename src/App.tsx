import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Counter from "./Components/Counter";
// import TODO from "./Components/TODO/TODO";
import {Cart} from "./Components/Carts/Cart";
import { Cards } from "./Components/Carts/Cards";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Cart />
      <div className="mt-[7.5cm] w-100">
        <Cards />
      </div>
      <ToastContainer autoClose={2000} newestOnTop={true}  />
    </div>
  );
}

export default App;
