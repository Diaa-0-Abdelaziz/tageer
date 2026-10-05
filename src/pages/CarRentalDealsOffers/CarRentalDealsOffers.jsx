import React, { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loading from '../../Loading';
import { offers, offerFigures } from '../../data/offers';
import PageIntro from '../../ImportantSlicesSharedComponents/PageIntro';
import './offers.css';
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));

export default function CarRentalDealsOffers() {
    const { t } = useTranslation();
    const [copied, setCopied] = useState('');
    const date = t('offers.date');
    const aed = (n) => t('card.aed', { value: Number(n).toLocaleString('en-US') });
    // figures quoted inside the offer texts, formatted as money
    const figures = { day: aed(offerFigures.day), month: aed(offerFigures.month), transfer: aed(offerFigures.transfer) };

    const copyCode = async (code) => {
      let ok = false;
      try {
        await navigator.clipboard.writeText(code);
        ok = true;
      } catch (e) {
        // clipboard API unavailable (insecure context / denied): fall back to a hidden textarea
        const area = document.createElement('textarea');
        area.value = code;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
        document.body.removeChild(area);
      }
      setCopied(ok ? code : 'failed:' + code);
      setTimeout(() => setCopied(''), 2000);
    };
  return (
    <div className='NavyPage'>
    <PageIntro id='offers' values={{ date }} className='CarType pt-3'/>

    <section className='offers-grid'>
      <div className='container'>
        <div className='row'>
          {offers.map((offer) => {
            const key = `offers.items.${offer.id}`;
            return (
              <div className='col-xl-4 col-md-6 mb-4' key={offer.id}>
                <article className='offer-card'>
                  <div className='offer-top'>
                    <span className='offer-tag'>{t(`${key}.tag`)}</span>
                    <span className='offer-badge'>{t(`${key}.badge`, figures)}</span>
                  </div>
                  <h4>{t(`${key}.title`)}</h4>
                  <p className='offer-desc'>{t(`${key}.description`, figures)}</p>
                  {offer.code && (
                    <button type='button' className='offer-code' onClick={() => copyCode(offer.code)} aria-label={t('offers.copyAria', { code: offer.code })}>
                      <span>{offer.code}</span>
                      <small>{copied === offer.code ? t('offers.copied') : copied === 'failed:' + offer.code ? t('offers.copyManually') : t('offers.copy')}</small>
                    </button>
                  )}
                  <p className='offer-terms'>{t(`${key}.conditions`)} {t('offers.validUntil', { date })}</p>
                  <Link to={offer.to} className='offer-cta'>{t(`${key}.cta`)} &rarr;</Link>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <Suspense fallback={<Loading/>}> <PageServices/></Suspense>
    <Suspense fallback={<Loading/>}> <PageFAQ set='offers'/></Suspense>
    </div>
  )
}
