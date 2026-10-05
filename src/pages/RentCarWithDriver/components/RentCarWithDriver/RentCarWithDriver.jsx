import React from 'react';
import PageIntro from '../../../../ImportantSlicesSharedComponents/PageIntro';
import RentCarWithDriverProducts from './RentCarWithDriverProducts/RentCarWithDriverProducts';
export default function RentCarWithDriver() {
  return (
    <>
    <PageIntro id='chauffeur' className='CarType pt-3'/>
    <RentCarWithDriverProducts/>
    </>
  )
}
