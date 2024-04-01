import React from 'react'
import RentSuvDubai from './components/RentSuvDubai/RentSuvDubai'
import FAQ from '../Home/component/FAQ/FAQ'
import BESTSERVICES from '../Home/component/BEST-SERVICES/BESTSERVICES'
import SuggestedCarRental from './components/SuggestedCarRental'
import SuggestedCarRentalCursel from './components/SuggestedCarRentalCursel/RentSUVLuxuryCursel'

export default function CarDetails() {
  return (
   <>
   <RentSuvDubai/>
   <SuggestedCarRental/>
   <SuggestedCarRentalCursel/>
   <BESTSERVICES/>
   <FAQ/>
   </>
  )
}
