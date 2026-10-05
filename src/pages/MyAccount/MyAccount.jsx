import React from 'react'
import { useTranslation } from 'react-i18next';
import PageBanner from '../../ImportantSlicesSharedComponents/PageBanner';
import Content from './components/content/content';

export default function MyAccount() {
  const { t } = useTranslation();
  return (
   <>
    <PageBanner title={t('banner.account')} />
    <Content/>
   </>
  )
}
