import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

// Four contact cards. Phone numbers are the same ones shown in the footer.
export default function ContactInfo() {
  const { t } = useTranslation();
  const cards = [
    { key: 'office', icon: <FaLocationDot/>, title: t('contact.office'),
      lines: [{ text: t('contact.address'), href: 'https://www.google.com/maps/search/?api=1&query=Business+Bay+Dubai' }] },
    { key: 'phone', icon: <IoCall/>, title: t('contact.phone'),
      lines: [{ text: '+971 4 554 0871', href: 'tel:+97145540871', ltr: true }, { text: `${t('contact.sales')}: +971 56 442 4448`, href: 'tel:+971564424448', ltr: true }] },
    { key: 'whatsapp', icon: <IoLogoWhatsapp/>, title: t('contact.whatsapp'),
      lines: [{ text: '+971 56 442 4448', href: 'https://wa.me/971564424448', ltr: true }, { text: `${t('contact.sales')}: +971 4 554 0871`, href: 'https://wa.me/97145540871', ltr: true }] },
    { key: 'mail', icon: <MdEmail/>, title: t('contact.mail'),
      lines: [{ text: 'info@tajeercarrent.com', href: 'mailto:info@tajeercarrent.com', ltr: true }] },
  ];
  return (
    <section className='contact-cards'>
      <div className="container">
        <div className="row">
          {cards.map((card) => (
            <div className="col-lg-3 col-md-6 mb-4" key={card.key}>
              <article className='contact-card'>
                <i className='contact-icon' aria-hidden="true">{card.icon}</i>
                <h4>{card.title}</h4>
                {card.lines.map((line) => (
                  <a key={line.text} href={line.href} target={line.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={line.ltr ? 'ltr-text' : ''}>
                    {line.ltr ? <bdi dir="ltr">{line.text}</bdi> : line.text}
                  </a>
                ))}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
