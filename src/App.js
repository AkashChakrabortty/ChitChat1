import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import router from "./Router/Router";
function App() {
  return (
    <div >
     <RouterProvider router={router} />
     <ToastContainer />
    </div>
  );
}

export default App;
