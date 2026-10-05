import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import ZENITH_LOGO from "../../../../images/brand/zenith-icon.png"
import "./content.css"
import { Link } from 'react-router-dom';
import SecondCards from '../../../../ImportantSlicesSharedComponents/SecondCards';
import { useLocalize } from '../../../../i18n/localize';
import { cars } from '../../../../data/cars';

// Demo account: the "contacted" and "viewed" tabs show a couple of catalogue cars until
// real user activity is available from the backend.
const contactedCars = [cars[0], cars[2]];
const viewedCars = [cars[1], cars[3]];

function CarCards({ list }) {
  const { t, money, car: localize } = useLocalize();
  return list.map(localize).map((car) => (
    <SecondCards
      key={car.id}
      Productindex={car.id}
      productImage={car.img}
      ProductDoors={t('card.doorsValue', { count: car.doors })}
      ProductEngine={car.engine}
      ProductPriceOfDay={money(car.pricePerDay)}
      ProductPriceOfMonth={money(car.pricePerMonth)}
      ProductPriceOfWeek={money(car.pricePerWeek)}
      ProductDeposit={money(car.deposit)}
      ProductMinimumOfDays={t('card.daysValue', { count: car.minDays })}
      ProductColor={car.color}
      ProductBrand={car.brandLabel}
      ProductModel={car.model}
      ProductYear={car.year}
      ProductType={car.bodyType}
      productTitle={car.title}
      ownerWhatsapp={car.whatsapp}
      ownerEmail={car.email}
      ownerCall={car.call}
    />
  ));
}

export default function Content() {
  const { t } = useTranslation();
  const fields = [
    { id: 'name', label: t('account.nameLabel'), type: 'text', value: t('account.name') },
    { id: 'email', label: t('account.emailLabel'), type: 'email', value: 'ahmed.ibrahim@example.com' },
    { id: 'phone', label: t('account.phoneLabel'), type: 'text', value: '+971 56 442 4448' },
  ];
  return (
    <>
    <section className='content mt-5'>
       <div className="container">
        <div className="row">
            <div className="col-lg-4">
            <ul className="list-group">
                <li className="list-group-item  d-flex flex-column align-items-center">
                    <i><FaUserCircle/></i>
                    <p>{t('account.name')}</p>
                </li>
                <li className="list-group-item">
                    <p>{t('account.profile')}</p>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label htmlFor="flexSwitchCheckDefault">{t('account.notifications')}</label>
                    <div className="form-check form-switch">
                        <input className="form-check-input fs-4" type="checkbox" id="flexSwitchCheckDefault"/>
                    </div>
                </li>
                <li className="list-group-item">
                    <p>{t('account.logout')}</p>
                </li>
            </ul>
            </div>
            <div className="col-lg-8 tableAccount">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="border-end border-5 border-white  active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"  role="tab" aria-controls="pills-home" aria-selected="true">
                <span>{t('account.tabs.profile')}</span>
              </li>
              <li className="border-end border-5  border-white " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"  role="tab" aria-controls="pills-profile" aria-selected="false">
                <span>{t('account.tabs.contacted')}</span>
              </li>
              <li className="border-end border-5  border-white  " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"  role="tab" aria-controls="pills-contact" aria-selected="false">
                <span>{t('account.tabs.bookings')}</span>
              </li>
              <li className=" " id="pills-ali-tab" data-bs-toggle="pill" data-bs-target="#pills-ali"  role="tab" aria-controls="pills-ali" aria-selected="false">
                <span>{t('account.tabs.viewed')}</span>
              </li>
          </ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  <ul className="list-group w-100">
    {fields.map((field) => (
      <li className="list-group-item d-flex flex-row align-items-center" key={field.id}>
        <div className="mb-3">
          <label htmlFor={`account-${field.id}`} className="form-label fs-6">{field.label}</label>
          <input type={field.type} className="form-control bg-white border-0" value={field.value} id={`account-${field.id}`} disabled readOnly/>
        </div>
        <p className='m-0 fs-6 mt-3 ms-5'>{t('account.edit')}</p>
      </li>
    ))}
  </ul>
  </div>
  <div className="tab-pane fade p-1" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    <CarCards list={contactedCars} />
  </div>
  <div className="tab-pane fade p-1" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className="container my-5 d-flex flex-column align-items-center">
  <img src={ZENITH_LOGO} alt='Zenith Car Rental' className='w-50 p-4 rounded-4' style={{backgroundImage:'linear-gradient(180deg, #17233E 0%, #0A1220 100%)'}}/>
  <p>{t('account.noBookings')}</p>
  <Link to="/" className='Back_To_Home text-decoration-none'><span className=''>{t('account.backHome')}</span></Link>
  </div>
  </div>
  <div className="tab-pane fade" id="pills-ali" role="tabpanel" aria-labelledby="pills-ali-tab">
    <CarCards list={viewedCars} />
  </div>
</div>
        </div>
        </div>
       </div>
    </section>
    </>
  )
}
