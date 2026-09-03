import React, { lazy, Suspense } from 'react';
import Loading from '../../Loading';
import { cheapCars } from '../../data/cars';
const Search = lazy(() => import('./component/Search/Search'));
const CarType = lazy(() => import('./component/carType/carType'));
const Carbrand = lazy(() => import('./component/carBrand/Carbrand'));
const RentSUVLuxury = lazy(() => import('./component/RentSUVLuxury/RentSUVLuxury'));
const CarRentalCompanies = lazy(() => import('./component/CarRentalCompanies/CarRentalCompanies'));
const BetterWay = lazy(() => import('./component/BetterWay/BetterWay'));
const BESTSERVICES = lazy(() => import('./component/BEST-SERVICES/BESTSERVICES'));
const NextTrip = lazy(() => import('./component/Next-Trip/NextTrip'));
const Testimonials = lazy(() => import('./component/TestimonialsAndCursol/Testimonials'));
const FAQ = lazy(() => import('./component/FAQ/FAQ'));
export default function Home() {
  return (
  <>
  <Suspense fallback={<Loading/>}> <Search/></Suspense>
  <Suspense fallback={<Loading/>}><CarType/></Suspense>
  <Suspense fallback={<Loading/>}> <Carbrand/></Suspense>
  <Suspense fallback={<Loading/>}> <RentSUVLuxury/></Suspense>
  <Suspense fallback={<Loading/>}>
    <RentSUVLuxury
      title="Rent Cheap Car In Dubai"
      viewAllLink="./RentCheapCar"
      products={cheapCars}
      lead="Economy sedans from 75 AED a day - the cheapest way to stay mobile in Dubai without buying a car."
      body={[
        `If you only need a car to get to work, to the mall and to the airport, there is no reason to pay luxury rates.
         These are the cheapest cars our partners have on the road right now, and the monthly rates work out lower than most
         people spend on taxis and ride-hailing in the same period.`,
        `The Kia Pegas, Nissan Sunny and Mitsubishi Attrage sit at the bottom of the price list and are the usual choice for
         a long-stay rental. The Toyota Yaris and Hyundai Accent cost a little more but are slightly bigger inside and are the
         easiest cars to park in older parts of Deira and Bur Dubai. If you need something more presentable for client meetings,
         the Toyota Corolla and Chevrolet Malibu are still under 150 AED a day.`,
        `All of them are automatic, all are fitted with Salik tags, and every rate includes comprehensive insurance and a
         mileage allowance of 250 km a day on daily bookings or 4,500 km a month on monthly ones. Fuel is not included and the
         car is handed over with a full tank, which is how it should come back.`,
        `Monthly rentals are where the savings are: servicing, registration and roadside assistance are all covered by the
         supplier, and there is no down payment. A valid driving licence, Emirates ID or passport and a credit card for the
         refundable deposit is all you need to collect the keys.`,
      ]}
    />
  </Suspense>
  <Suspense fallback={<Loading/>}><CarRentalCompanies/></Suspense>
  <Suspense fallback={<Loading/>}> <BetterWay/></Suspense>
  <Suspense fallback={<Loading/>}> <NextTrip/></Suspense>
  <Suspense fallback={<Loading/>}><BESTSERVICES/></Suspense>
  <Suspense fallback={<Loading/>}> <Testimonials/></Suspense>
  <Suspense fallback={<Loading/>}><FAQ/></Suspense>

 

 
  </>
  )
}
