import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import { useLocalize } from '../i18n/localize';
import SecondCards from './SecondCards';
import './carCatalog.css';

const PAGE_SIZE = 5;
const unique = (list) => [...new Set(list)].sort((a, b) => String(a).localeCompare(String(b)));
// [{ value, label }] with one entry per distinct value, sorted by label
const options = (items) => {
  const map = new Map(items.map(([value, label]) => [value, label]));
  return [...map].map(([value, label]) => ({ value, label })).sort((a, b) => String(a.label).localeCompare(String(b.label)));
};

const SORTS = {
  recommended: () => 0,
  priceAsc: (a, b) => a.pricePerDay - b.pricePerDay,
  priceDesc: (a, b) => b.pricePerDay - a.pricePerDay,
  yearDesc: (a, b) => b.year - a.year,
  nameAsc: (a, b) => a.title.localeCompare(b.title),
};

const roundedRange = (cars) => {
  const prices = cars.map((c) => c.pricePerDay);
  return [Math.floor(Math.min(...prices) / 50) * 50, Math.ceil(Math.max(...prices) / 50) * 50];
};

// Browsable, filterable list of the given cars. Used by the Brands, Luxury, Sport, ... pages.
// `showClass` hides the Luxury/Economy filter on pages that already show a single class.
// Filter values are stored as the English catalogue values so they survive a language switch.
export default function CarCatalog({ cars: sourceCars, showClass = true, initialSort = 'recommended' }) {
  const { t, lang, money, car: localize } = useLocalize();
  const cars = useMemo(() => sourceCars.map(localize), [sourceCars, localize]);

  const [MIN_PRICE, MAX_PRICE] = useMemo(() => roundedRange(sourceCars), [sourceCars]);
  const emptyFilters = useMemo(() => ({
    search: '', model: '', year: '', color: '', category: '', bodyType: '',
    price: [MIN_PRICE, MAX_PRICE],
  }), [MIN_PRICE, MAX_PRICE]);

  const [searchParams, setSearchParams] = useSearchParams();
  const brand = searchParams.get('brand') || '';
  const [filters, setFilters] = useState(emptyFilters);
  const [sort, setSort] = useState(initialSort);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const resultsRef = useRef(null);
  const chipsRef = useRef(null);

  // Keep the selected brand chip visible in the horizontally scrolling row.
  useEffect(() => {
    const active = chipsRef.current?.querySelector('.brand-chip.active');
    if (active && chipsRef.current) {
      chipsRef.current.scrollTo({ left: active.offsetLeft - 16, behavior: 'smooth' });
    }
  }, [brand]);

  const setBrand = (value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set('brand', value); else next.delete('brand');
    setSearchParams(next, { replace: true });
    setFilters((f) => ({ ...f, model: '' }));
    setCurrentPage(1);
  };
  const update = (key, value) => {
    setFilters((f) => ({ ...f, [key]: value }));
    setCurrentPage(1);
  };

  // Options only offer values that exist for the chosen brand, so a filter can never dead-end.
  const brandCars = useMemo(() => (brand ? cars.filter((c) => c.brand === brand) : cars), [cars, brand]);
  const opts = useMemo(() => ({
    brands: options(cars.map((c) => [c.brand, c.brandLabel])),
    models: unique(brandCars.map((c) => c.model)),
    years: unique(brandCars.map((c) => c.year)).reverse(),
    colors: options(brandCars.map((c) => [c.english.color, c.color])),
    bodyTypes: options(brandCars.map((c) => [c.english.bodyType, c.bodyType])),
  }), [cars, brandCars]);
  const brandLabel = (value) => (opts.brands.find((b) => b.value === value) || {}).label || value;
  const colorLabel = (value) => (opts.colors.find((b) => b.value === value) || {}).label || value;
  const bodyLabel = (value) => (opts.bodyTypes.find((b) => b.value === value) || {}).label || value;

  const results = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    return brandCars
      .filter((c) =>
        (!q || `${c.title} ${c.english.title} ${c.brandLabel} ${c.brand} ${c.model} ${c.bodyType} ${c.supplierLabel} ${c.supplier}`.toLowerCase().includes(q)) &&
        (!filters.model || c.model === filters.model) &&
        (!filters.year || String(c.year) === String(filters.year)) &&
        (!filters.color || c.english.color === filters.color) &&
        (!filters.category || c.category === filters.category) &&
        (!filters.bodyType || c.english.bodyType === filters.bodyType) &&
        c.pricePerDay >= filters.price[0] && c.pricePerDay <= filters.price[1])
      .sort(SORTS[sort]);
  }, [brandCars, filters, sort]);

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const page = Math.min(currentPage, totalPages);
  const visible = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const activeFilters = [
    brand && { key: 'brand', label: brandLabel(brand), clear: () => setBrand('') },
    filters.search && { key: 'search', label: `"${filters.search}"`, clear: () => update('search', '') },
    filters.model && { key: 'model', label: filters.model, clear: () => update('model', '') },
    filters.year && { key: 'year', label: filters.year, clear: () => update('year', '') },
    filters.color && { key: 'color', label: colorLabel(filters.color), clear: () => update('color', '') },
    filters.category && { key: 'category', label: t(`catalog.classes.${filters.category}`), clear: () => update('category', '') },
    filters.bodyType && { key: 'bodyType', label: bodyLabel(filters.bodyType), clear: () => update('bodyType', '') },
    (filters.price[0] !== MIN_PRICE || filters.price[1] !== MAX_PRICE) && {
      key: 'price', label: t('catalog.priceChip', { min: filters.price[0], max: filters.price[1] }), clear: () => update('price', [MIN_PRICE, MAX_PRICE]),
    },
  ].filter(Boolean);

  const clearAll = () => {
    setFilters(emptyFilters);
    setSort(initialSort);
    setBrand('');
  };

  const goToPage = (n) => {
    setCurrentPage(Math.min(Math.max(n, 1), totalPages));
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const findCars = () => {
    setShowFilters(false);
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className='FILTER BrandsFilter overflow-hidden'>
      <div className="container">
        {/* ---------- brand chips ---------- */}
        <div className="brand-chips" ref={chipsRef} role="group" aria-label={t('catalog.allBrandsAria')}>
          <button type="button" className={`brand-chip ${!brand ? 'active' : ''}`} onClick={() => setBrand('')}>
            {t('catalog.allBrands')} <span>{cars.length}</span>
          </button>
          {opts.brands.map((b) => (
            <button type="button" key={b.value} className={`brand-chip ${brand === b.value ? 'active' : ''}`} onClick={() => setBrand(brand === b.value ? '' : b.value)}>
              {b.label} <span>{cars.filter((c) => c.brand === b.value).length}</span>
            </button>
          ))}
        </div>

        <div className="results-bar" ref={resultsRef}>
          <div>
            <h4 className="results-count">{t('catalog.carsAvailable', { count: results.length })}</h4>
            {activeFilters.length > 0 && (
              <div className="active-filters">
                {activeFilters.map((f) => (
                  <button type="button" key={f.key} className="active-chip" onClick={f.clear} aria-label={t('catalog.removeFilter', { label: f.label })}>
                    {f.label} <span aria-hidden="true">×</span>
                  </button>
                ))}
                <button type="button" className="clear-all" onClick={clearAll}>{t('catalog.clearAll')}</button>
              </div>
            )}
          </div>
          <div className="results-actions">
            <button type="button" className="filters-toggle" onClick={() => setShowFilters((s) => !s)} aria-expanded={showFilters}>
              {showFilters ? t('catalog.hideFilters') : activeFilters.length ? t('catalog.filtersCount', { count: activeFilters.length }) : t('catalog.filters')}
            </button>
            <label className="sort-by">
              <span>{t('catalog.sortBy')}</span>
              <select value={sort} onChange={(e) => { setSort(e.target.value); setCurrentPage(1); }}>
                {Object.keys(SORTS).map((key) => <option key={key} value={key}>{t(`catalog.sorts.${key}`)}</option>)}
              </select>
            </label>
          </div>
        </div>

        <div className="row">
          {/* ---------- filters ---------- */}
          <div className="col-xl-3">
            <aside className={`filter-panel ${showFilters ? 'open' : ''}`}>
              <div className="filter-title">
                <h2>{t('catalog.filterTitle')}</h2>
                <p>{t('catalog.searchYourCar')}</p>
              </div>

              <div className="filter-item">
                <input type="text" placeholder={t('catalog.searchPlaceholder')} value={filters.search} onChange={(e) => update('search', e.target.value)} aria-label={t('catalog.searchAria')} />
              </div>
              <div className="filter-item">
                <select value={brand} onChange={(e) => setBrand(e.target.value)} aria-label={t('catalog.brand')}>
                  <option value="">{t('catalog.allBrands')}</option>
                  {opts.brands.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
                </select>
              </div>
              <div className="filter-item">
                <select value={filters.model} onChange={(e) => update('model', e.target.value)} aria-label={t('catalog.model')}>
                  <option value="">{t('catalog.allModels')}</option>
                  {opts.models.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div className="filter-item">
                <select value={filters.year} onChange={(e) => update('year', e.target.value)} aria-label={t('catalog.year')}>
                  <option value="">{t('catalog.anyYear')}</option>
                  {opts.years.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div className="filter-item">
                <select value={filters.color} onChange={(e) => update('color', e.target.value)} aria-label={t('catalog.color')}>
                  <option value="">{t('catalog.anyColor')}</option>
                  {opts.colors.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
                </select>
              </div>

              {showClass && (
                <>
                  <p className="filter-label">{t('catalog.class')}</p>
                  <div className="pill-group">
                    {['', 'luxury', 'sport', 'economy'].map((value) => (
                      <button type="button" key={value || 'all'} className={`pill ${filters.category === value ? 'active' : ''}`} onClick={() => update('category', value)}>
                        {t(`catalog.classes.${value || 'all'}`)}
                      </button>
                    ))}
                  </div>
                </>
              )}

              <p className="filter-label">{t('catalog.bodyType')}</p>
              <div className="pill-group">
                <button type="button" className={`pill ${!filters.bodyType ? 'active' : ''}`} onClick={() => update('bodyType', '')}>{t('catalog.all')}</button>
                {opts.bodyTypes.map((b) => (
                  <button type="button" key={b.value} className={`pill ${filters.bodyType === b.value ? 'active' : ''}`} onClick={() => update('bodyType', filters.bodyType === b.value ? '' : b.value)}>{b.label}</button>
                ))}
              </div>

              <p className="filter-label">{t('catalog.pricePerDay')}</p>
              <Slider
                value={filters.price}
                onChange={(_, v) => update('price', v)}
                valueLabelDisplay="auto"
                min={MIN_PRICE}
                max={MAX_PRICE}
                step={50}
                getAriaLabel={() => t('catalog.pricePerDay')}
                sx={{ color: '#17233E', '& .MuiSlider-thumb': { width: 16, height: 16 } }}
              />
              <div className="price-values">
                <span>{money(filters.price[0])}</span>
                <span>{money(filters.price[1])}</span>
              </div>

              <div className="filter-actions">
                <button type="button" className="find-car" onClick={findCars}>{t('catalog.showCars', { count: results.length })}</button>
                <button type="button" className="reset" onClick={clearAll} disabled={!activeFilters.length && sort === initialSort}>{t('catalog.reset')}</button>
              </div>
            </aside>
          </div>

          {/* ---------- results ---------- */}
          <div className="col-xl-9 carts">
            {visible.length === 0 ? (
              <div className="no-results">
                <h4>{t('catalog.noMatchTitle')}</h4>
                <p>{t('catalog.noMatchText')}</p>
                <button type="button" className="find-car" onClick={clearAll}>{t('catalog.clearAllFilters')}</button>
              </div>
            ) : visible.map((car) => (
              <SecondCards
                key={car.id}
                Productindex={car.id}
                productImage={car.img}
                ProductDoors={t('card.doorsValue', { count: car.doors })}
                ProductEngine={car.engine}
                ProductPriceOfDay={money(car.pricePerDay)}
                ProductPriceOfMonth={money(car.pricePerMonth)}
                ProductPriceOfWeek={money(car.pricePerWeek)}
                ProductDeposit={money(car.deposit)}
                ProductMinimumOfDays={t('card.daysValue', { count: car.minDays })}
                ProductColor={car.color}
                ProductBrand={car.brandLabel}
                ProductModel={car.model}
                ProductYear={car.year}
                ProductType={car.bodyType}
                productTitle={car.title}
                ownerWhatsapp={car.whatsapp}
                ownerEmail={car.email}
                ownerCall={car.call}
              />
            ))}

            {results.length > PAGE_SIZE && (
              <nav aria-label={t('catalog.pageNav')}>
                <ul className="pagination">
                  <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                    <button type="button" className="page-link" aria-label={t('catalog.prevPage')} disabled={page === 1} onClick={() => goToPage(page - 1)}>{lang === 'ar' ? '»' : '«'}</button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                      <button type="button" className="page-link" aria-current={page === i + 1 ? 'page' : undefined} onClick={() => goToPage(i + 1)}>{i + 1}</button>
                    </li>
                  ))}
                  <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                    <button type="button" className="page-link" aria-label={t('catalog.nextPage')} disabled={page === totalPages} onClick={() => goToPage(page + 1)}>{lang === 'ar' ? '«' : '»'}</button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
