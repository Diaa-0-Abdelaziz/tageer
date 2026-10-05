import React from 'react'
import { useTranslation } from 'react-i18next';

// Numbered clauses for the Terms and Privacy pages, read from legal.<id> in the locale files.
export default function LegalSection({ id }) {
  const { t } = useTranslation();
  const items = t(`legal.${id}.items`, { returnObjects: true });
  return (
    <section className='BESTSERVICES BESTSERVICES_Terms'>
      <div className="container overflow-hidden">
        <div className="row d-flex justify-content-center overflow-hidden">
          <div>
            <h3 className=' fs-3 BESTSERVICES_H3_Terms'>{t(`legal.${id}.title1`)}</h3>
            <h3 className=' fs-3 BESTSERVICES_H3_Terms'>{t(`legal.${id}.title2`)}</h3>
            {items.map((item) => <p className=' my-5' key={item}>{item}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}
