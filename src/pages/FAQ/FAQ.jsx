import React from 'react'
import { useTranslation } from 'react-i18next';
import PageBanner from '../../ImportantSlicesSharedComponents/PageBanner';
import PageFAQ from '../../ImportantSlicesSharedComponents/PageFAQ';

const GROUPS = ['general', 'luxury', 'sport', 'cheap', 'monthly', 'chauffeur', 'yachts', 'offers'];

export default function FAQ() {
  const { t } = useTranslation();
  return (
    <>
    <PageBanner title={t('banner.faq')} />
    {GROUPS.map((group) => (
      <div key={group}>
        <div className='container mt-5'><h3 className='fw-bold'>{t(`faqGroups.${group}`)}</h3></div>
        <PageFAQ set={group} hideTitle />
      </div>
    ))}
    </>
  )
}
