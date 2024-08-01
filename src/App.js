import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./form/Signup";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./form/Login";
import Header from "./header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {
  const route = createBrowserRouter([
    
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },

    {
      path: "/header",
      element: <Header />
    }

  ]);
  return (
    <div className="App">
    <RouterProvider router={route}></RouterProvider>
    <ToastContainer theme="dark" autoClose={1000} />
  </div>
  );
}

export default App;
