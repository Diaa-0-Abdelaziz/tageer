import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';

function App() {
  let routes =  createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {index:true, element:<Home/>},
        // {path:'products', element:<ProtectedPath><Products/></ProtectedPath>},
        // {path:'*', element:<Notfound/>}
      ]
    }
  ])
  return (
   <RouterProvider router={routes}></RouterProvider>
  )
}

export default App;
