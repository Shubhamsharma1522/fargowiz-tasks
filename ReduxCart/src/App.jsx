import "./App.css";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={1000} />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
