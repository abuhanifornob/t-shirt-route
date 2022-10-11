import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import About from './components/About/About';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
       path:'/',
       element:<Home></Home>
      }
      ,{
        path:'orders',
        element:<Orders></Orders>
      },
      {
      path:'about',
      element:<About></About>
      }
    ]
    }


  ])
  return (
    <div className="App">

     
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
