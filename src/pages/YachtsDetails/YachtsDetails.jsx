import React, {lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../Loading';
import { getYachtById } from '../../data/yachts';
const RentSuvDubai= lazy(() => import('./components/RentSuvDubai/RentSuvDubai'));
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));
const Notfound= lazy(() => import('../../Notfound/Notfound'));
export default function YachtsDetails() {
  const { id } = useParams();
  const yacht = getYachtById(id);

  if (!yacht) {
    return <Suspense fallback={<Loading/>}> <Notfound/> </Suspense>;
  }

  return (
   <div className='NavyPage'>
   <Suspense fallback={<Loading/>}><RentSuvDubai yacht={yacht}/> </Suspense>
     <Suspense fallback={<Loading/>}> <PageServices/></Suspense>
     <Suspense fallback={<Loading/>}> <PageFAQ set='yachts'/></Suspense>   
   </div>
  )
}
