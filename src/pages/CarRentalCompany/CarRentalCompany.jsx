import React, { useMemo, lazy, Suspense } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoCallSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Loading from '../../Loading';
import { companies } from '../../data/companies';
import { cars } from '../../data/cars';
import PageIntro from '../../ImportantSlicesSharedComponents/PageIntro';
import './companies.css';
const CarCatalog= lazy(() => import('../../ImportantSlicesSharedComponents/CarCatalog'));
const PageServices= lazy(() => import('../../ImportantSlicesSharedComponents/PageServices'));
const PageFAQ= lazy(() => import('../../ImportantSlicesSharedComponents/PageFAQ'));

const carsOf = (company) => cars.filter((c) => c.supplier === company.name);

// translated view of a company (falls back to the English data)
function useCompanyText(company) {
  const { t } = useTranslation();
  const key = `companyData.${company.slug}`;
  return {
    name: t(`companies.${company.name}`, company.name),
    classes: t(`${key}.classes`, { returnObjects: true, defaultValue: company.classes }),
    area: t(`${key}.area`, company.area),
    delivery: t(`${key}.delivery`, company.delivery),
    hours: t(`${key}.hours`, company.hours),
  };
}

function CompanyCard({ company }) {
  const { t } = useTranslation();
  const text = useCompanyText(company);
  const count = carsOf(company).length;
  return (
    <article className='company-card'>
      <div className='company-logo'>
        <img src={company.logo} alt={text.name} loading='lazy' />
      </div>
      <div className='company-body'>
        <h4>{text.name}</h4>
        <p className='area'>{text.area}</p>
        <ul className='classes list-unstyled'>
          {text.classes.map((c) => <li key={c}>{c}</li>)}
        </ul>
        <ul className='facts list-unstyled'>
          <li><GoDotFill/> {t('pages.companies.carsFleetFacts', { fleet: company.fleetSize, branches: company.branches, since: company.since })}</li>
          <li><GoDotFill/> {text.delivery}</li>
          <li><GoDotFill/> {text.hours}</li>
        </ul>
        <div className='company-actions'>
          <Link to={`/CarRentalCompany?company=${company.slug}`} className='view-cars'>
            {count > 0 ? t('pages.companies.viewCars', { count }) : t('pages.companies.viewCompany')}
          </Link>
          <a href={`tel:+${company.phone}`} className='call' aria-label={text.name}><IoCallSharp/> {company.phone}</a>
        </div>
      </div>
    </article>
  );
}

function CompanyProfile({ company }) {
  const { t } = useTranslation();
  const text = useCompanyText(company);
  const values = {
    name: text.name, area: text.area, branches: company.branches, fleet: company.fleetSize, since: company.since,
    phone: company.phone, delivery: text.delivery, hours: text.hours, classes: text.classes.join(', '),
  };
  return (
    <>
      <PageIntro
        className='CarType pt-3'
        title={text.name}
        lead={t('pages.companies.specialises', values)}
        body={t('pages.companies.profile', { returnObjects: true, ...values })}
      >
        <p className='back-link'><Link to='/CarRentalCompany'>{t('pages.companies.allCompanies')}</Link></p>
      </PageIntro>
    </>
  );
}

export default function CarRentalCompany() {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const slug = searchParams.get('company') || '';
    const company = useMemo(() => companies.find((c) => c.slug === slug), [slug]);
    const companyCars = useMemo(() => (company ? carsOf(company) : []), [company]);
    const companyName = company ? t(`companies.${company.name}`, company.name) : '';

  return (
    <div className='NavyPage'>
    {company
      ? <CompanyProfile company={company} />
      : <PageIntro id='companies' values={{ count: companies.length }} className='CarType pt-3'/>}

    {company ? (
      companyCars.length > 0
        ? <Suspense fallback={<Loading/>}> <CarCatalog key={company.slug} cars={companyCars}/></Suspense>
        : <section className='CarType pb-5'>
            <div className='container'>
              <p className='fw-bold'>{t('pages.companies.noCars', { name: companyName })}</p>
              <p>{t('pages.companies.noCarsText', { phone: company.phone })} <Link to='/CarRentalCompany'>{t('pages.companies.browseOthers')}</Link>.</p>
            </div>
          </section>
    ) : (
      <section className='companies-grid'>
        <div className='container'>
          <div className='row'>
            {companies.map((c) => (
              <div className='col-xl-4 col-md-6 mb-4' key={c.id}><CompanyCard company={c} /></div>
            ))}
          </div>
        </div>
      </section>
    )}
    <Suspense fallback={<Loading/>}> <PageServices/></Suspense>
    <Suspense fallback={<Loading/>}> <PageFAQ set='company'/></Suspense>
    </div>
  )
}
