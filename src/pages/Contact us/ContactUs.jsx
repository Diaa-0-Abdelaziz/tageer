import React, {lazy, Suspense } from 'react'
import Loading from '../../Loading';
const ContactUsHeader= lazy(() => import('./components/ContactUsHeader/ContactUsHeader'));
const Info= lazy(() => import('./components/info/info'));
const ContactInfo= lazy(() => import('./components/contactInfo/ContactInfo'));
const ContactForm= lazy(() => import('./components/contactForm/contactForm'));


export default function ContactUs() {
  return (
    <>
    <Suspense fallback={<Loading/>}><ContactUsHeader/>  </Suspense>
    <Suspense fallback={<Loading/>}> <Info/> </Suspense>
    <Suspense fallback={<Loading/>}> <ContactInfo/> </Suspense>
    <Suspense fallback={<Loading/>}> <ContactForm/> </Suspense>
    
    
    
    
    </>
  )
}
