import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import Yachts from './pages/Yachts/Yachts';
import YachtsDetails from './pages/YachtsDetails/YachtsDetails';
import RentCarWithDrivers from './pages/RentCarWithDriver/RentCarWithDrivers';
import RentCarWithDriverDetails from './pages/rent-car-with-driver-details/rentCarWithDriverDetails';

function App() {
  let routes =  createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {index:true, element:<Home/>},
        {path:'yachts', element:<Yachts/>},
        {path:'rentCarWithDriver', element:<RentCarWithDrivers/>},
        {path:'YachtsDetails/:id', element:<YachtsDetails/>},
        {path:'RentCarWithDriverDetails/:id', element:<RentCarWithDriverDetails/>},
        // {path:'*', element:<Notfound/>}
      ]
    }
  ])
  return (
   <RouterProvider router={routes}></RouterProvider>
  )
}

export default App;
