import React, { lazy, Suspense, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loading from '../../Loading';
import { cars } from '../../data/cars';
import PageIntro from '../../ImportantSlicesSharedComponents/PageIntro';
const CarCatalog= lazy(() => import('../../ImportantSlicesSharedComponents/CarCatalog'));
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));

// /Category/luxury, /Category/sport, /Category/economy — any other id lists every car.
export default function Category() {
  const { t } = useTranslation();
  const { id } = useParams();
  const kind = ['luxury', 'sport', 'economy'].includes(id) ? id : 'all';
  const list = useMemo(() => (kind === 'all' ? cars : cars.filter((c) => c.category === kind)), [kind]);
  const type = t(`pages.category.types.${kind}`);
  return (
    <div className='NavyPage'>
      <PageIntro id='category' values={{ type, count: list.length }}/>
      <Suspense fallback={<Loading/>}> <CarCatalog key={kind} cars={list} showClass={kind === 'all'}/></Suspense>
      <Suspense fallback={<Loading/>}> <PageServices/></Suspense>
      <Suspense fallback={<Loading/>}> <PageFAQ set='general'/></Suspense>
    </div>
  )
}
