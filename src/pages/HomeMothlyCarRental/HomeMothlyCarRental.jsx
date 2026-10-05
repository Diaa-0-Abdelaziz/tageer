import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Loading from '../../Loading';
import { cars } from '../../data/cars';
import PageIntro from '../../ImportantSlicesSharedComponents/PageIntro';
const cheapestMonthly = Math.min(...cars.map((c) => c.pricePerMonth));
const CarCatalog= lazy(() => import('../../ImportantSlicesSharedComponents/CarCatalog'));
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));

export default function HomeMothlyCarRental() {
  const { t } = useTranslation();
  return (
    <div className='NavyPage'>
      <PageIntro id='monthly' values={{ price: t('card.aed', { value: cheapestMonthly.toLocaleString('en-US') }) }}/>
      <Suspense fallback={<Loading/>}> <CarCatalog cars={cars} initialSort='priceAsc'/></Suspense>
      <Suspense fallback={<Loading/>}> <PageServices/></Suspense>
      <Suspense fallback={<Loading/>}> <PageFAQ set='monthly'/></Suspense>
    </div>
  )
}
