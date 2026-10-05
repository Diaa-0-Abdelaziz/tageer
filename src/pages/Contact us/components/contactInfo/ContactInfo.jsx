import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import "./ContactInfo.css"
export default function ContactInfo() {
  const { t } = useTranslation();
  return (
    <section className='ContactInfo mt-5'>
        <div className="container">
            {/* <img src={land} alt={land} className=' w-50 position-absolute start-50 top-50 translate-middle' /> */}
       <ul>
        <li>
            <div>
               <i><FaLocationDot/></i>
               <h4>{t('contact.office')}</h4>
               <span><a href="https://maps.app.goo.gl/inBUS8hTzjHZC1eF9" target='_blank' rel="noopener noreferrer">{t('contact.address')}</a></span>
            </div>
        </li>
        <li>
        <div>
               <i><IoCall/></i>
               <h4>{t('contact.phone')}</h4>
               <span><a href="tel:+97145540871" aria-label={t('contact.phone')}><bdi dir="ltr">+971 4 554 0871</bdi></a> <a href="tel:+971564424448">{t('contact.sales')}. <bdi dir="ltr">+971 56 442 4448</bdi></a></span>
            </div>
        </li>
       </ul>

       <ul className='whatsMale'>
        <li>
            <div>
               <i><IoLogoWhatsapp/></i>
               <h4>{t('contact.whatsapp')}</h4>
               <span><a href="https://wa.me/971564424448" aria-label={t('contact.whatsapp')}><bdi dir="ltr">+971 56 442 4448</bdi></a> <a href="https://wa.me/97145540871">{t('contact.sales')}. <bdi dir="ltr">+971 4 554 0871</bdi></a></span>
            </div>
        </li>
        <li>
        <div>
               <i><MdEmail/></i>
               <h4>{t('contact.mail')}</h4>
               <span><a href="mailto:info@tajeercarrent.com" aria-label={t('contact.mail')}>info@tajeercarrent.com</a></span>
            </div>
        </li>
       </ul>
        </div>
    </section>
  )
}
