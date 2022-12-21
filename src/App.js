import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client';
import './App.css';
import router from "./Router/Router";
function App() {
  const socket = io.connect('https://chitchat-zeta.vercel.app/')
  // console.log(socket)
 
  return (
    <div >
     <RouterProvider router={router} />
     <ToastContainer />
    </div>
  );
}

export default App;
