import React from 'react';
import { useLocalize } from '../../../../i18n/localize';
import PageIntro from '../../../../ImportantSlicesSharedComponents/PageIntro';
import RentSuvDubaiCursel from './RentSuvDubaiCursel/RentSuvDubaiCursel';

export default function RentSuvDubai({car: source}) {
  const { t, lang, money, chauffeur: localize } = useLocalize();
  if (!source) return null;
  const car = localize(source);
  const { chauffeur } = car;
  const [hourly, halfDay, fullDay, airport] = chauffeur.rates;
  const values = {
    title: car.title, year: car.year, model: car.model, supplier: car.supplierLabel, seats: car.seats,
    hourly: money(hourly.price), halfDay: money(halfDay.price), fullDay: money(fullDay.price), airport: money(airport.price),
    halfDayDetail: halfDay.detail, fullDayDetail: fullDay.detail, minHours: chauffeur.minHours,
    languages: chauffeur.languages.join(lang === 'ar' ? '، ' : ', '), extraHour: money(chauffeur.extraHourPrice),
  };
  return (
    <>
    <PageIntro
      className='CarType pt-3'
      title={t('chauffeur.details.pageTitle', values)}
      lead={t('chauffeur.details.lead', values)}
      body={t('chauffeur.details.body', { returnObjects: true, ...values })}
    />
    <RentSuvDubaiCursel car={source}/>
    </>
  )
}
