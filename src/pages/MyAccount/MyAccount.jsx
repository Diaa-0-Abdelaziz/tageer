import React, {lazy, Suspense } from 'react'
import Loading from '../../Loading';
const MyAccountHeader= lazy(() => import('./components/MyAccountHeader/MyAccountHeader'));
const Content= lazy(() => import('./components/content/content'));

export default function MyAccount() {
  return (
   <>
  <Suspense fallback={<Loading/>}> <MyAccountHeader/></Suspense>
  <Suspense fallback={<Loading/>}> <Content/></Suspense>

   
   
   </>
  )
}
