import React from 'react'
import { chauffeurCars } from '../../../../../data/chauffeur'
import ChauffeurCard from '../../../../../ImportantSlicesSharedComponents/ChauffeurCard'

export default function RentCarWithDriverProducts() {
  return (
    <section className='overflow-hidden RentSUVLuxuryCursel'>
      <div className="container main-slider mb-5">
        <div className="row">
          {chauffeurCars.map((car) => <ChauffeurCard key={car.id} car={car} />)}
        </div>
      </div>
    </section>
  )
}
