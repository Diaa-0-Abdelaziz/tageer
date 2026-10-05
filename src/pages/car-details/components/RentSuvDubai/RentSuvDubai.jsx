import React from 'react';
import { useLocalize } from '../../../../i18n/localize';
import PageIntro from '../../../../ImportantSlicesSharedComponents/PageIntro';
import RentSuvDubaiCursel from './RentSuvDubaiCursel/RentSuvDubaiCursel';

export default function RentSuvDubai({car: source}) {
  const { t, money, car: localize } = useLocalize();
  if (!source) return null;
  const car = localize(source);
  const isSuv = source.bodyType.toLowerCase().includes('suv');
  const values = {
    title: car.title, year: car.year, model: car.model, supplier: car.supplierLabel,
    day: money(car.pricePerDay), month: money(car.pricePerMonth), km: car.mileagePerDay,
    deposit: money(car.deposit), minDays: t('card.daysValue', { count: car.minDays }),
    bodyType: car.bodyType.toLowerCase(), seats: car.seats,
  };
  const body = [
    car.description,
    car.highlights,
    ...t('carDetails.body', { returnObjects: true, ...values }),
    t(isSuv ? 'carDetails.suv' : 'carDetails.notSuv', values),
  ];
  return (
    <>
    <PageIntro
      className='CarType pt-3'
      title={t('carDetails.pageTitle', values)}
      lead={t('carDetails.lead', values)}
      body={body}
    />
    <RentSuvDubaiCursel car={source}/>
    </>
  )
}
