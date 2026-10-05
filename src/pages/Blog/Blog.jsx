import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loading from '../../Loading';
import PageBanner from '../../ImportantSlicesSharedComponents/PageBanner';
import PageServices from '../../ImportantSlicesSharedComponents/PageServices';
const RentSUVLuxuryCursel= lazy(() => import('../Home/component/RentSUVLuxury/RentSUVLuxuryCursel/RentSUVLuxuryCursel'));

export default function Blog() {
  const { t } = useTranslation();
  return (
    <>
    <PageBanner title={t('banner.blog')} />
    <section className='CarType pt-3'>
      <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
          <h3 className=''>{t('blog.featured')}</h3>
          <div className='line'></div>
          <Link to="/ViewAll" className='ViewAll badge ms-2 text-decoration-none'><span className=''>{t('blog.viewAll')}</span></Link>
        </div>
      </div>
    </section>
    <Suspense fallback={<Loading/>}><RentSUVLuxuryCursel/> </Suspense>
    <PageServices />
    </>
  )
}
