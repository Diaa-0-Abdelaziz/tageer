import React from 'react';
import { useTranslation } from 'react-i18next';
export default function SuggestedCarRental() {
  const { t } = useTranslation();
  return (
    <>
    <section className='CarType pt-3 mt-5'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>{t('carDetails.suggested')}</h3>
        <div className='line'></div>
        <span className='ViewAll badge ms-2'>{t('carDetails.viewAll')}</span>
        </div>
        </div>
    </section>
    </>
  )
}
