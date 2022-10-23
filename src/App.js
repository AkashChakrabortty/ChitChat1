import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import './App.css';
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Login from "./components/Login/Login";
import MainRoute from "./components/MainRoute/MainRoute";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <MainRoute></MainRoute>,
      children: 
      [ 
      {
          path: '/',
          element: <Login></Login>
      },
      {
      path: '/create',
      element: <CreateAccount></CreateAccount>
      }
      ]
    }
  ])
  return (
    <div >
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
