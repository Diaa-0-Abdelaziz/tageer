import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

// Catalogue data (data/*.js) is stored in English. These helpers return a copy with the
// fields translated for the current language; anything without a translation falls back to
// the English value, so adding a new car never breaks the page.
export function useLocalize() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const money = useCallback(
    (n) => t('card.aed', { value: Number(n).toLocaleString('en-US') }),
    [t]
  );

  const car = useCallback((c) => {
    const id = c.id;
    const horse = (p) => (p ? t('carFields.hp', { value: String(p).replace(/\s*hp$/i, ''), defaultValue: p }) : p);
    return {
      ...c,
      english: { title: c.title, color: c.color, bodyType: c.bodyType },
      brandLabel: t(`carFields.brands.${c.brand}`, c.brand),
      title: t(`carData.${id}.title`, c.title),
      color: t(`carFields.colors.${c.color}`, c.color),
      bodyType: t(`carFields.bodyTypes.${c.bodyType}`, c.bodyType),
      engine: t(`carFields.engines.${c.engine}`, c.engine),
      transmission: t(`carFields.transmissions.${c.transmission}`, c.transmission),
      fuel: t(`carFields.fuels.${c.fuel}`, c.fuel),
      power: lang === 'en' ? c.power : horse(c.power),
      supplierLabel: t(`companies.${c.supplier}`, c.supplier),
      description: t(`carData.${id}.description`, c.description),
      highlights: t(`carData.${id}.highlights`, c.highlights),
      features: t(`carData.${id}.features`, { returnObjects: true, defaultValue: c.features }),
    };
  }, [t, lang]);

  const rates = useCallback((kind, list, minHours) => list.map((r) => ({
    ...r,
    label: t(`${kind}.rate.${r.key}`, r.label),
    detail: t(`${kind}.detail.${r.key}`, { count: minHours, defaultValue: r.detail }),
  })), [t]);

  const chauffeur = useCallback((c) => ({
    ...car(c),
    chauffeur: {
      ...c.chauffeur,
      rates: rates('chauffeur', c.chauffeur.rates, c.chauffeur.minHours),
      included: c.chauffeur.included.map((i) => t(`chauffeur.included.${i}`, i)),
      languages: c.chauffeur.languages.map((l) => t(`languagesNames.${l}`, l)),
    },
  }), [t, car, rates]);

  const yacht = useCallback((y) => ({
    ...y,
    title: t(`yachtData.${y.id}.title`, y.title),
    operator: t(`yachtData.${y.id}.operator`, y.operator),
    departure: t(`yachtData.${y.id}.departure`, y.departure),
    bestFor: t(`yachtData.${y.id}.bestFor`, y.bestFor),
    description: t(`yachtData.${y.id}.description`, y.description),
    highlights: t(`yachtData.${y.id}.highlights`, y.highlights),
    features: t(`yachtData.${y.id}.features`, { returnObjects: true, defaultValue: y.features }),
    rates: rates('yacht', y.rates, y.minHours),
    included: y.included.map((i) => t(`yacht.included.${i}`, i)),
  }), [t, rates]);

  return { t, lang, money, car, chauffeur, yacht };
}
