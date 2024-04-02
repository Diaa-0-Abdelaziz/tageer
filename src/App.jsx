import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import Yachts from './pages/Yachts/Yachts';
import YachtsDetails from './pages/YachtsDetails/YachtsDetails';
import RentCarWithDrivers from './pages/RentCarWithDriver/RentCarWithDrivers';
import RentCarWithDriverDetails from './pages/rent-car-with-driver-details/rentCarWithDriverDetails';
import CarDetails from './pages/car-details/carDetails';
import Blog from './pages/Blog/Blog';
import ListYourCars from './pages/List your cars/ListYourCars';
import ContactUs from './pages/Contact us/ContactUs';

function App() {
  let routes =  createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {index:true, element:<Home/>},
        {path:'yachts', element:<Yachts/>},
        {path:'rentCarWithDriver', element:<RentCarWithDrivers/>},
        {path:'Blog', element:<Blog/>},
        {path:'ListYourCars', element:<ListYourCars/>},
        {path:'ContactUs', element:<ContactUs/>},
        {path:'YachtsDetails/:id', element:<YachtsDetails/>},
        {path:'RentCarWithDriverDetails/:id', element:<RentCarWithDriverDetails/>},
        {path:'CarDetails/:id', element:<CarDetails/>},
        // {path:'*', element:<Notfound/>}
      ]
    }
  ])
  return (
   <RouterProvider router={routes}></RouterProvider>
  )
}

export default App;
