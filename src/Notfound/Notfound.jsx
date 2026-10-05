import React from 'react'
import { useTranslation } from 'react-i18next'
import notfound from '../images/not found error 404.png'
import { Link } from 'react-router-dom'
export default function Notfound() {
  const { t } = useTranslation();
  return (
   <section className='notfound'>
    <div className="container d-flex flex-column justify-content-center align-items-center position-relative">
   <img src={notfound} alt='404' className='' />
   <p>{t('notFound.text')}</p>
   <Link to="/">{t('notFound.back')}</Link>
    </div>
   </section>
  )
}
