import React, { useMemo, lazy, Suspense } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loading from '../../Loading';
import { cars, searchCars } from '../../data/cars';
import PageIntro from '../../ImportantSlicesSharedComponents/PageIntro';
const CarCatalog= lazy(() => import('../../ImportantSlicesSharedComponents/CarCatalog'));
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));

export default function ViewAll() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').trim();
  const results = useMemo(() => (query ? searchCars(query) : cars), [query]);
  const cheapest = Math.min(...cars.map((c) => c.pricePerDay));
  const aed = (n) => t('card.aed', { value: Number(n).toLocaleString('en-US') });

  const intro = query ? (
    <PageIntro
      id='search'
      values={{ query }}
      lead={results.length ? t('pages.search.lead', { count: results.length }) : t('pages.search.noneTitle', { query })}
    />
  ) : (
    <PageIntro id='viewAll' values={{ count: cars.length, price: aed(cheapest) }}/>
  );

  return (
    <div className='NavyPage'>
      {intro}
      {results.length > 0
        ? <Suspense fallback={<Loading/>}> <CarCatalog key={query} cars={results}/></Suspense>
        : <section className='CarType pb-5'>
            <div className='container'>
              <p className='fw-bold'>{t('pages.search.noneTitle', { query })}</p>
              <p>{t('pages.search.noneText')}{' '}
                <Link to='/ViewAll'>{t('pages.search.showAll', { count: cars.length })}</Link>.</p>
            </div>
          </section>}
      <Suspense fallback={<Loading/>}> <PageServices/></Suspense>
      <Suspense fallback={<Loading/>}> <PageFAQ set='general'/></Suspense>
    </div>
  )
}
