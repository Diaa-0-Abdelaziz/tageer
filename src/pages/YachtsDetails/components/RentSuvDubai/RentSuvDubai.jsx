import React from 'react';
import { useLocalize } from '../../../../i18n/localize';
import PageIntro from '../../../../ImportantSlicesSharedComponents/PageIntro';
import RentSuvDubaiCursel from './RentSuvDubaiCursel/RentSuvDubaiCursel';

export default function RentSuvDubai({yacht: source}) {
  const { t, money, yacht: localize } = useLocalize();
  if (!source) return null;
  const yacht = localize(source);
  const [hourly, fourHours, fullDay] = yacht.rates;
  const values = {
    title: yacht.title, length: yacht.lengthFt, capacity: yacht.capacity, departure: yacht.departure, operator: yacht.operator,
    bestFor: yacht.bestFor.toLowerCase(), minHours: yacht.minHours,
    hourly: money(hourly.price), fourHours: money(fourHours.price), fullDay: money(fullDay.price),
  };
  return (
    <>
    <PageIntro
      className='CarType pt-3'
      title={t('yacht.details.pageTitle', values)}
      lead={t('yacht.details.lead', values)}
      body={[yacht.description, yacht.highlights, ...t('yacht.details.body', { returnObjects: true, ...values })]}
    />
    <RentSuvDubaiCursel yacht={source}/>
    </>
  )
}
