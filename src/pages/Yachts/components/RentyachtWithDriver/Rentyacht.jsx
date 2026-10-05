import React from 'react';
import PageIntro from '../../../../ImportantSlicesSharedComponents/PageIntro';
import RentyachtWithDriverProducts from './RentyachtWithDriverProducts/RentyachtWithDriverProducts';
export default function Rentyacht() {
  return (
    <>
    <PageIntro id='yachts' className='CarType pt-3'/>
    <RentyachtWithDriverProducts/>
    </>
  )
}
