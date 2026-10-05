import React, {lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next';
import Loading from '../../Loading';
import PageBanner from '../../ImportantSlicesSharedComponents/PageBanner';
const Info= lazy(() => import('./components/info/info'));
const ContactInfo= lazy(() => import('./components/contactInfo/ContactInfo'));
const ContactForm= lazy(() => import('./components/contactForm/contactForm'));
export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <>
    <PageBanner title={t('banner.contact')} />
    <Suspense fallback={<Loading/>}> <Info/> </Suspense>
    <Suspense fallback={<Loading/>}> <ContactInfo/> </Suspense>
    <Suspense fallback={<Loading/>}> <ContactForm/> </Suspense>
    </>
  )
}
