import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import CarTypeCursel from './carTypeCursel/carTypeCursel';
export default function CarType() {
  const { t } = useTranslation();

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>{t('home.carType.title')}</h3>
        <div className='line'></div>
        </div>
        <p className=' fw-bold'>{t('home.carType.lead')}</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {t('home.carType.body', { returnObjects: true }).join(' ')}
          {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">{t('common.readMore')}</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">{t('common.readLess')}</span> 
          }
        </p>
        </div>
    </section>
    <CarTypeCursel/>
    </>
  )
}
