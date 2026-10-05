import React from 'react';
import { useTranslation } from 'react-i18next';
export default function Info() {
  const { t } = useTranslation();
  return (
    <>
    <section className=' pt-3 mt-5'>
        <div className="container">
        <p className=' fw-bold'>{t('contact.intro')}</p>
        <p className='position-relative'>{t('contact.introText')}</p>
        </div>
    </section>
    </>
  )
}
