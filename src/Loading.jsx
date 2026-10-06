import React from 'react'
import { useTranslation } from 'react-i18next'
import logo from './images/brand/zenith-icon.png'
import './loading.css'

// Full-area splash shown while a lazy page chunk loads (Suspense fallback).
export default function Loading() {
  const { t } = useTranslation();
  return (
    <section className='zenith-loading position-absolute top-0 bottom-0 start-0 end-0' role='status' aria-live='polite' aria-label={t('common.loading')}>
      <div className='zenith-loading__box'>
        <img src={logo} alt='' className='zenith-loading__logo' />
        <div className='zenith-loading__bar' aria-hidden='true'><span></span></div>
        <p>{t('common.loading')}</p>
      </div>
    </section>
  )
}
