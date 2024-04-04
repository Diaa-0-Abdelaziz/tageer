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
import TermsAndCondition from './pages/TermsAndCondition/TermsAndCondition';
import Privacy from './pages/Privacy/Privacy';
import AboutUs from './pages/About us/AboutUs';
import MyAccount from './pages/MyAccount/MyAccount';
import ViewAll from './pages/ViewAll/ViewAll';
import CarList from './pages/CarList/CarList';
import CarRentalDealsOffers from './pages/CarRentalDealsOffers/CarRentalDealsOffers';
import HomeMothlyCarRental from './pages/HomeMothlyCarRental/HomeMothlyCarRental';
import Brands from './pages/Brands/Brands';
import BrandModel from './pages/BrandModel/BrandModel';
import Category from './pages/Category/Category';
import CarRentalCompany from './pages/CarRentalCompany/CarRentalCompany';

function App() {
  let routes =  createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {index:true, element:<Home/>},
        {path:'yachts', element:<Yachts/>},
        {path:'rentCarWithDriver', element:<RentCarWithDrivers/>},
        {path:'ViewAll', element:<ViewAll/>},
        {path:'CarList', element:<CarList/>},
        {path:'CarRentalDealsOffers', element:<CarRentalDealsOffers/>},
        {path:'HomeMothlyCarRental', element:<HomeMothlyCarRental/>},
        {path:'Blog', element:<Blog/>},
        {path:'Brands/:id', element:<Brands/>},
        {path:'Category/:id', element:<Category/>},
        {path:'CarRentalCompany', element:<CarRentalCompany/>},
        {path:'BrandModel', element:<BrandModel/>},
        {path:'ListYourCars', element:<ListYourCars/>},
        {path:'ContactUs', element:<ContactUs/>},
        {path:'TermsAndCondition', element:<TermsAndCondition/>},
        {path:'Privacy', element:<Privacy/>},
        {path:'AboutUs', element:<AboutUs/>},
        {path:'MyAccount', element:<MyAccount/>},
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
