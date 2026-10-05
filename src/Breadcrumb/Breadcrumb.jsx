import React from 'react';
import { useLocation, Link } from 'react-router-dom';
const LABELS = {
  MothlyCarRental: 'Monthly Car Rental',
  ContactUs: 'Contact Us',
  TermsAndCondition: 'Terms & Conditions',
  CarRentalDealsOffers: 'Car Rental Deals & Offers',
};
// "RentSportCar" -> "Rent Sport Car", "car-list" -> "Car List"
const toLabel = (segment) => {
  const text = decodeURIComponent(segment);
  if (LABELS[text]) return LABELS[text];
  return text
    .replace(/[-_]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, (c) => c.toUpperCase());
};

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
  <div className="container breadcrumb-wrap">
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
    {location.pathname !== '/' && (
        <li className="breadcrumb-item-home">
            <Link to="/" className=' text-decoration-none fw-bold text-muted'>Home</Link>
        </li>
)}
    {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <li key={name + index} aria-current={isLast ? 'page' : undefined}>
            {isLast ? (
              <span className='active fw-bold'>{toLabel(name)}</span>
            ) : (
              <Link to={routeTo} className='fw-bold text-muted text-decoration-none'>{toLabel(name)}</Link>
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