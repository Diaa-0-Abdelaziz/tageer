import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import SecondCards from './SecondCards';
import './carCatalog.css';

const PAGE_SIZE = 5;
const aed = (n) => `${Number(n).toLocaleString('en-US')} AED`;
const unique = (list) => [...new Set(list)].sort((a, b) => String(a).localeCompare(String(b)));

const SORTS = {
  recommended: { label: 'Recommended', fn: () => 0 },
  priceAsc: { label: 'Price: low to high', fn: (a, b) => a.pricePerDay - b.pricePerDay },
  priceDesc: { label: 'Price: high to low', fn: (a, b) => b.pricePerDay - a.pricePerDay },
  yearDesc: { label: 'Newest first', fn: (a, b) => b.year - a.year },
  nameAsc: { label: 'Name: A to Z', fn: (a, b) => a.title.localeCompare(b.title) },
};

const roundedRange = (cars) => {
  const prices = cars.map((c) => c.pricePerDay);
  return [Math.floor(Math.min(...prices) / 50) * 50, Math.ceil(Math.max(...prices) / 50) * 50];
};

// Browsable, filterable list of the given cars. Used by the Brands and Luxury pages.
// `showClass` hides the Luxury/Economy filter on pages that already show a single class.
export default function CarCatalog({ cars, showClass = true }) {
  const [MIN_PRICE, MAX_PRICE] = useMemo(() => roundedRange(cars), [cars]);
  const emptyFilters = useMemo(() => ({
    search: '', model: '', year: '', color: '', category: '', bodyType: '',
    price: [MIN_PRICE, MAX_PRICE],
  }), [MIN_PRICE, MAX_PRICE]);
  const [searchParams, setSearchParams] = useSearchParams();
  const brand = searchParams.get('brand') || '';
  const [filters, setFilters] = useState(emptyFilters);
  const [sort, setSort] = useState('recommended');
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
  const options = useMemo(() => ({
    brands: unique(cars.map((c) => c.brand)),
    models: unique(brandCars.map((c) => c.model)),
    years: unique(brandCars.map((c) => c.year)).reverse(),
    colors: unique(brandCars.map((c) => c.color)),
    bodyTypes: unique(brandCars.map((c) => c.bodyType)),
  }), [brandCars]);

  const results = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    return brandCars
      .filter((c) =>
        (!q || `${c.title} ${c.brand} ${c.model} ${c.bodyType} ${c.supplier}`.toLowerCase().includes(q)) &&
        (!filters.model || c.model === filters.model) &&
        (!filters.year || String(c.year) === String(filters.year)) &&
        (!filters.color || c.color === filters.color) &&
        (!filters.category || c.category === filters.category) &&
        (!filters.bodyType || c.bodyType === filters.bodyType) &&
        c.pricePerDay >= filters.price[0] && c.pricePerDay <= filters.price[1])
      .sort(SORTS[sort].fn);
  }, [brandCars, filters, sort]);

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const page = Math.min(currentPage, totalPages);
  const visible = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const activeFilters = [
    brand && { key: 'brand', label: brand, clear: () => setBrand('') },
    filters.search && { key: 'search', label: `"${filters.search}"`, clear: () => update('search', '') },
    filters.model && { key: 'model', label: filters.model, clear: () => update('model', '') },
    filters.year && { key: 'year', label: filters.year, clear: () => update('year', '') },
    filters.color && { key: 'color', label: filters.color, clear: () => update('color', '') },
    filters.category && { key: 'category', label: filters.category === 'luxury' ? 'Luxury' : 'Economy', clear: () => update('category', '') },
    filters.bodyType && { key: 'bodyType', label: filters.bodyType, clear: () => update('bodyType', '') },
    (filters.price[0] !== MIN_PRICE || filters.price[1] !== MAX_PRICE) && {
      key: 'price', label: `${filters.price[0]} – ${filters.price[1]} AED/day`, clear: () => update('price', [MIN_PRICE, MAX_PRICE]),
    },
  ].filter(Boolean);

  const clearAll = () => {
    setFilters(emptyFilters);
    setSort('recommended');
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
        <div className="brand-chips" ref={chipsRef} role="group" aria-label="Filter by brand">
          <button type="button" className={`brand-chip ${!brand ? 'active' : ''}`} onClick={() => setBrand('')}>
            All brands <span>{cars.length}</span>
          </button>
          {options.brands.map((b) => (
            <button type="button" key={b} className={`brand-chip ${brand === b ? 'active' : ''}`} onClick={() => setBrand(brand === b ? '' : b)}>
              {b} <span>{cars.filter((c) => c.brand === b).length}</span>
            </button>
          ))}
        </div>

        <div className="results-bar" ref={resultsRef}>
          <div>
            <h4 className="results-count">{results.length} {results.length === 1 ? 'car' : 'cars'} available</h4>
            {activeFilters.length > 0 && (
              <div className="active-filters">
                {activeFilters.map((f) => (
                  <button type="button" key={f.key} className="active-chip" onClick={f.clear} aria-label={`Remove filter ${f.label}`}>
                    {f.label} <span aria-hidden="true">×</span>
                  </button>
                ))}
                <button type="button" className="clear-all" onClick={clearAll}>Clear all</button>
              </div>
            )}
          </div>
          <div className="results-actions">
            <button type="button" className="filters-toggle" onClick={() => setShowFilters((s) => !s)} aria-expanded={showFilters}>
              {showFilters ? 'Hide filters' : `Filters${activeFilters.length ? ` (${activeFilters.length})` : ''}`}
            </button>
            <label className="sort-by">
              <span>Sort by</span>
              <select value={sort} onChange={(e) => { setSort(e.target.value); setCurrentPage(1); }}>
                {Object.entries(SORTS).map(([key, s]) => <option key={key} value={key}>{s.label}</option>)}
              </select>
            </label>
          </div>
        </div>

        <div className="row">
          {/* ---------- filters ---------- */}
          <div className="col-xl-3">
            <aside className={`filter-panel ${showFilters ? 'open' : ''}`}>
              <div className="filter-title">
                <h2>Filter</h2>
                <p>Search your car</p>
              </div>

              <div className="filter-item">
                <input type="text" placeholder="Search by name, model, supplier…" value={filters.search} onChange={(e) => update('search', e.target.value)} aria-label="Search cars" />
              </div>
              <div className="filter-item">
                <select value={brand} onChange={(e) => setBrand(e.target.value)} aria-label="Brand">
                  <option value="">All brands</option>
                  {options.brands.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="filter-item">
                <select value={filters.model} onChange={(e) => update('model', e.target.value)} aria-label="Model">
                  <option value="">All models</option>
                  {options.models.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div className="filter-item">
                <select value={filters.year} onChange={(e) => update('year', e.target.value)} aria-label="Year">
                  <option value="">Any year</option>
                  {options.years.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div className="filter-item">
                <select value={filters.color} onChange={(e) => update('color', e.target.value)} aria-label="Color">
                  <option value="">Any color</option>
                  {options.colors.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {showClass && (
                <>
                  <p className="filter-label">Class</p>
                  <div className="pill-group">
                    {[['', 'All'], ['luxury', 'Luxury'], ['economy', 'Economy']].map(([value, label]) => (
                      <button type="button" key={label} className={`pill ${filters.category === value ? 'active' : ''}`} onClick={() => update('category', value)}>{label}</button>
                    ))}
                  </div>
                </>
              )}

              <p className="filter-label">Body type</p>
              <div className="pill-group">
                <button type="button" className={`pill ${!filters.bodyType ? 'active' : ''}`} onClick={() => update('bodyType', '')}>All</button>
                {options.bodyTypes.map((t) => (
                  <button type="button" key={t} className={`pill ${filters.bodyType === t ? 'active' : ''}`} onClick={() => update('bodyType', filters.bodyType === t ? '' : t)}>{t}</button>
                ))}
              </div>

              <p className="filter-label">Price per day</p>
              <Slider
                value={filters.price}
                onChange={(_, v) => update('price', v)}
                valueLabelDisplay="auto"
                min={MIN_PRICE}
                max={MAX_PRICE}
                step={50}
                getAriaLabel={() => 'Price per day'}
                sx={{ color: '#3A1B50', '& .MuiSlider-thumb': { width: 16, height: 16 } }}
              />
              <div className="price-values">
                <span>{aed(filters.price[0])}</span>
                <span>{aed(filters.price[1])}</span>
              </div>

              <div className="filter-actions">
                <button type="button" className="find-car" onClick={findCars}>Show {results.length} {results.length === 1 ? 'car' : 'cars'}</button>
                <button type="button" className="reset" onClick={clearAll} disabled={!activeFilters.length && sort === 'recommended'}>Reset</button>
              </div>
            </aside>
          </div>

          {/* ---------- results ---------- */}
          <div className="col-xl-9 carts">
            {visible.length === 0 ? (
              <div className="no-results">
                <h4>No cars match your filters</h4>
                <p>Try removing a filter or widening the price range.</p>
                <button type="button" className="find-car" onClick={clearAll}>Clear all filters</button>
              </div>
            ) : visible.map((car) => (
              <SecondCards
                key={car.id}
                Productindex={car.id}
                productImage={car.img}
                ProductDoors={`${car.doors} doors`}
                ProductEngine={car.engine}
                ProductPriceOfDay={aed(car.pricePerDay)}
                ProductPriceOfMonth={aed(car.pricePerMonth)}
                ProductPriceOfWeek={aed(car.pricePerWeek)}
                ProductDeposit={aed(car.deposit)}
                ProductMinimumOfDays={`${car.minDays} days`}
                ProductColor={car.color}
                ProductBrand={car.brand}
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
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                    <button type="button" className="page-link" aria-label="Previous page" disabled={page === 1} onClick={() => goToPage(page - 1)}>&laquo;</button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                      <button type="button" className="page-link" aria-current={page === i + 1 ? 'page' : undefined} onClick={() => goToPage(i + 1)}>{i + 1}</button>
                    </li>
                  ))}
                  <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                    <button type="button" className="page-link" aria-label="Next page" disabled={page === totalPages} onClick={() => goToPage(page + 1)}>&raquo;</button>
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
