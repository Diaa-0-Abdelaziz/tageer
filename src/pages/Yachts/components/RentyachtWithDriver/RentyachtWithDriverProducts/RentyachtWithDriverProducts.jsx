import React from 'react'
import { yachts } from '../../../../../data/yachts'
import YachtCard from '../../../../../ImportantSlicesSharedComponents/YachtCard'

export default function RentyachtWithDriverProducts() {
  return (
    <section className='overflow-hidden RentSUVLuxuryCursel'>
      <div className="container main-slider mb-5">
        <div className="row">
          {yachts.map((yacht) => <YachtCard key={yacht.id} yacht={yacht} />)}
        </div>
      </div>
    </section>
  )
}
