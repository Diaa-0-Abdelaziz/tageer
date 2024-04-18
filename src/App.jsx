import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout/Layout';
import Loading from './Loading';
import './App.css';
const Notfound = lazy(() => import('./Notfound/Notfound'));
const FAQ = lazy(() => import('./pages/FAQ/FAQ'));
const RentCheapCar = lazy(() => import('./pages/RentCheapCar/RentCheapCar'));
const RentLuxuryCar = lazy(() => import('./pages/RentLuxuryCar/RentLuxuryCar'));
const RentSportCar = lazy(() => import('./pages/RentSportCar/RentSportCar'));
const Home = lazy(() => import('./pages/Home/Home'));
const Yachts = lazy(() => import('./pages/Yachts/Yachts'));
const YachtsDetails = lazy(() => import('./pages/YachtsDetails/YachtsDetails'));
const RentCarWithDrivers = lazy(() => import('./pages/RentCarWithDriver/RentCarWithDrivers'));
const RentCarWithDriverDetails = lazy(() => import('./pages/rent-car-with-driver-details/rentCarWithDriverDetails'));
const CarDetails = lazy(() => import('./pages/car-details/carDetails'));
const ListYourCars = lazy(() => import('./pages/List your cars/ListYourCars'));
const ContactUs = lazy(() => import('./pages/Contact us/ContactUs'));
const TermsAndCondition = lazy(() => import('./pages/TermsAndCondition/TermsAndCondition'));
const Privacy = lazy(() => import('./pages/Privacy/Privacy'));
const AboutUs = lazy(() => import('./pages/About us/AboutUs'));
const MyAccount = lazy(() => import('./pages/MyAccount/MyAccount'));
const ViewAll = lazy(() => import('./pages/ViewAll/ViewAll'));
const CarList = lazy(() => import('./pages/CarList/CarList'));
const CarRentalDealsOffers = lazy(() => import('./pages/CarRentalDealsOffers/CarRentalDealsOffers'));
const HomeMothlyCarRental = lazy(() => import('./pages/HomeMothlyCarRental/HomeMothlyCarRental'));
const Brands = lazy(() => import('./pages/Brands/Brands'));
const BrandModel = lazy(() => import('./pages/BrandModel/BrandModel'));
const Category = lazy(() => import('./pages/Category/Category'));
const CarRentalCompany = lazy(() => import('./pages/CarRentalCompany/CarRentalCompany'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
function App() {
  let routes =  createBrowserRouter([
    {
      path:"",
      element:<Layout/>,
      children:[
        {index:true, element:<Suspense fallback={<Loading/>}><Home/></Suspense>},
        {path:'ViewAll', element:<Suspense fallback={<Loading/>}> <ViewAll/> </Suspense>},
        {path:'CarList', element:<Suspense fallback={<Loading/>}> <CarList/> </Suspense>},
        {path:'CarRentalDealsOffers', element:<Suspense fallback={<Loading/>}> <CarRentalDealsOffers/> </Suspense>},
        {path:'MothlyCarRental', element:<Suspense fallback={<Loading/>}> <HomeMothlyCarRental/> </Suspense>},
        {path:'Blog', element:<Suspense fallback={<Loading/>}> <Blog/> </Suspense>},
        {path:'Category/:id', element:<Suspense fallback={<Loading/>}> <Category/> </Suspense>},
        {path:'CarRentalCompany', element:<Suspense fallback={<Loading/>}> <CarRentalCompany/> </Suspense>},
        {path:'Brands', element:<Suspense fallback={<Loading/>}> <Brands/> </Suspense>},
        {path:'BrandModel', element:<Suspense fallback={<Loading/>}> <BrandModel/> </Suspense>},
        {path:'ListYourCars', element:<Suspense fallback={<Loading/>}> <ListYourCars/> </Suspense>},
        {path:'ContactUs', element:<Suspense fallback={<Loading/>}> <ContactUs/> </Suspense>},
        {path:'TermsAndCondition', element:<Suspense fallback={<Loading/>}> <TermsAndCondition/> </Suspense>},
        {path:'Privacy', element:<Suspense fallback={<Loading/>}> <Privacy/> </Suspense>},
        {path:'AboutUs', element:<Suspense fallback={<Loading/>}> <AboutUs/> </Suspense>},
        {path:'FAQ', element:<Suspense fallback={<Loading/>}> <FAQ/> </Suspense>},
        {path:'RentLuxuryCar', element:<Suspense fallback={<Loading/>}> <RentLuxuryCar/> </Suspense>},
        {path:'RentSportCar', element:<Suspense fallback={<Loading/>}> <RentSportCar/> </Suspense>},
        {path:'RentCheapCar', element:<Suspense fallback={<Loading/>}> <RentCheapCar/> </Suspense>},
        {path:'MyAccount', element:<Suspense fallback={<Loading/>}> <MyAccount/> </Suspense>},
        {path:'yachts/:id', element:<Suspense fallback={<Loading/>}> <YachtsDetails/> </Suspense>},
        {path:'yachts', element:<Suspense fallback={<Loading/>}><Yachts/></Suspense>},
        {path:'rentCarWithDriver', element:<Suspense fallback={<Loading/>}> <RentCarWithDrivers/> </Suspense>},
        {path:'rentCarWithDriver/:id', element:<Suspense fallback={<Loading/>}> <RentCarWithDriverDetails/> </Suspense>},
        {path:'CarList/:id', element:<Suspense fallback={<Loading/>}> <CarDetails/> </Suspense>},
        {path:'*', element:<Suspense fallback={<Loading/>}> <Notfound/> </Suspense>},
        // {path:'*', element:<Notfound/>}
      ]
    }
  ])
  return (
   <RouterProvider router={routes}></RouterProvider>
  )
}

export default App;
