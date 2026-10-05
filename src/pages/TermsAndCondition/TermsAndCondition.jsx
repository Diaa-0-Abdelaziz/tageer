import React from 'react'
import { useTranslation } from 'react-i18next';
import PageBanner from '../../ImportantSlicesSharedComponents/PageBanner';
import LegalSection from '../../ImportantSlicesSharedComponents/LegalSection';

export default function TermsAndCondition() {
  const { t } = useTranslation();
  return (
    <>
      <PageBanner title={t('banner.terms')} />
      <LegalSection id='terms' />
    </>
  )
}
