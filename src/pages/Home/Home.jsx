import React from 'react'
import Search from './component/Search/Search'
import CarType from './component/carType/carType'
import Carbrand from './component/carBrand/Carbrand'
import RentSUVLuxury from './component/RentSUVLuxury/RentSUVLuxury'
import CarRentalCompanies from './component/CarRentalCompanies/CarRentalCompanies'
import BetterWay from './component/BetterWay/BetterWay'

export default function Home() {
  return (
  <>
  <Search/>
 <CarType/>
 <Carbrand/>
 <RentSUVLuxury/>
 <RentSUVLuxury/>
 <CarRentalCompanies/>
 <BetterWay/>
  </>
  )
}
