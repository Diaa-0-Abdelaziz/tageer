import React, {lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../Loading';
import { getChauffeurCarById } from '../../data/chauffeur';
const RentSuvDubai= lazy(() => import('./components/RentSuvDubai/RentSuvDubai'));
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));
const Notfound= lazy(() => import('../../Notfound/Notfound'));

export default function RentCarWithDriverDetails() {
  const { id } = useParams();
  const car = getChauffeurCarById(id);

  if (!car) {
    return <Suspense fallback={<Loading/>}> <Notfound/> </Suspense>;
  }

  return (
   <div className='NavyPage'>
     <Suspense fallback={<Loading/>}><RentSuvDubai car={car}/> </Suspense>
     <Suspense fallback={<Loading/>}> <PageServices/></Suspense>
     <Suspense fallback={<Loading/>}> <PageFAQ set='chauffeur'/></Suspense>   
   </div>
  )
}
