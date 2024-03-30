import "./App.css";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-center"  autoClose={400} limit={2} />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
