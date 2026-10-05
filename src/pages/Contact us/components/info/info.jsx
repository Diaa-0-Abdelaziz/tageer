import React from 'react';
import { useTranslation } from 'react-i18next';
export default function Info() {
  const { t } = useTranslation();
  return (
    <section className='contact-intro'>
      <div className="container">
        <span className='contact-eyebrow'>{t('contact.reach')}</span>
        <h2>{t('contact.intro')}</h2>
        <p>{t('contact.introText')}</p>
      </div>
    </section>
  )
}
