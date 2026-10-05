import React, {lazy, Suspense} from 'react'
import Loading from '../../Loading';
const Rentyacht= lazy(() => import('./components/RentyachtWithDriver/Rentyacht'));
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));

export default function Yachts() {
  return (
    <div className='NavyPage'>
     <Suspense fallback={<Loading/>}><Rentyacht/> </Suspense>
     <Suspense fallback={<Loading/>}><PageServices/> </Suspense>
     <Suspense fallback={<Loading/>}> <PageFAQ set='yachts'/> </Suspense>
    </div>
  )
}
