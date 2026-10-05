import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCarById } from '../data/cars';
import { getYachtById } from '../data/yachts';

function Breadcrumb() {
  const { t } = useTranslation();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // "RentSportCar" -> translated page name; "/CarList/16" -> the car's name; unknown ids -> "Details"
  const labelFor = (segment, index) => {
    const text = decodeURIComponent(segment);
    const parent = pathnames[index - 1];
    if (parent === 'CarList' || parent === 'rentCarWithDriver') {
      const car = getCarById(text);
      if (car) return t(`carData.${car.id}.title`, car.title);
    }
    if (parent === 'yachts') {
      const yacht = getYachtById(text);
      if (yacht) return t(`yachtData.${yacht.id}.title`, yacht.title);
    }
    if (parent && /^\d+$/.test(text)) return t('breadcrumb.details');
    const known = t(`breadcrumb.routes.${text}`, { defaultValue: '' });
    if (known) return known;
    return text
      .replace(/[-_]+/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/^./, (c) => c.toUpperCase());
  };

  return (
  <div className="container breadcrumb-wrap">
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
    {location.pathname !== '/' && (
        <li className="breadcrumb-item-home">
            <Link to="/" className=' text-decoration-none fw-bold text-muted'>{t('breadcrumb.home')}</Link>
        </li>
)}
    {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <li key={name + index} aria-current={isLast ? 'page' : undefined}>
            {isLast ? (
              <span className='active fw-bold'>{labelFor(name, index)}</span>
            ) : (
              <Link to={routeTo} className='fw-bold text-muted text-decoration-none'>{labelFor(name, index)}</Link>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
  </div>
  );
}

export default Breadcrumb;
