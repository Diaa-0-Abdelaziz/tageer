import React from 'react'
import { useTranslation } from 'react-i18next';
import PageBanner from '../../ImportantSlicesSharedComponents/PageBanner';
import LegalSection from '../../ImportantSlicesSharedComponents/LegalSection';

export default function Privacy() {
  const { t } = useTranslation();
  return (
    <>
      <PageBanner title={t('banner.privacy')} />
      <LegalSection id='privacy' />
    </>
  )
}
