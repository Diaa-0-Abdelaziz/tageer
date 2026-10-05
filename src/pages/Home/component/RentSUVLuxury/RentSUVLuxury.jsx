import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import RentSUVLuxuryCursel from './RentSUVLuxuryCursel/RentSUVLuxuryCursel';
import { Link } from 'react-router-dom';
import { luxurySuvs } from '../../../../data/cars';

export default function RentSUVLuxury({
  title,
  viewAllLink = "./RentLuxuryCar",
  lead,
  body,
  products = luxurySuvs,
}) {
    const { t } = useTranslation();
    title = title ?? t('home.suv.title');
    lead = lead ?? t('home.suv.lead');
    body = body ?? t('home.suv.body', { returnObjects: true });
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>{title}</h3>
        <div className='line'></div>
        <Link to={viewAllLink} className='ViewAll badge ms-2 text-decoration-none' aria-label="Go to view all page"><span className=''>{t('common.viewAll')}</span></Link>
        </div>
        <p className=' fw-bold'>{lead}</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {body.map((paragraph, i) => <React.Fragment key={i}>{paragraph}{' '}</React.Fragment>)}
          {!isExpanded ?
          <span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">{t('common.readMore')}</span>:<span onClick={toggleExpanded} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">{t('common.readLess')}</span> 
          }
        </p>
        </div>
    </section>
    <RentSUVLuxuryCursel products={products}/>
    </>
  )
}
