import React, { lazy, Suspense }  from 'react'
import Loading from '../../Loading';
const FAQHeader = lazy(() => import('./components/FAQHeader/FAQHeader'));
const FAQFAQ = lazy(() => import('./components/FAQ/FAQ'));
export default function FAQ() {
  return (
    <>
    <Suspense fallback={<Loading/>}> <FAQHeader/> </Suspense>
    <Suspense fallback={<Loading/>}> <FAQFAQ/> </Suspense>
    </>
  )
}
