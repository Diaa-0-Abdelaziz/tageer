import React from 'react'
import { useTranslation } from 'react-i18next';
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

// WhatsApp / email / call icons that reveal the contact detail on hover.
export default function ContactBar({ whatsapp, email, call }) {
  const { t } = useTranslation();
  const items = [
    { key: 'whatsapp', value: whatsapp, href: `https://wa.me/${whatsapp}`, icon: <IoLogoWhatsapp />, label: t('common.whatsapp') },
    { key: 'email', value: email, href: `mailto:${email}`, icon: <MdEmail />, label: t('common.email') },
    { key: 'call', value: call, href: `tel:+${call}`, icon: <IoCallSharp />, label: t('common.call') },
  ];
  return (
    <div className="contact mt-2">
      <ul className='list-unstyled d-flex justify-content-around'>
        {items.map((item) => (
          <li key={item.key}>
            <i onClick={() => window.open(item.href)}>
              <div className="ex-categor d-flex flex-column">
                <span onClick={() => window.open(item.href)}>{item.value}</span>
              </div>
              {item.icon}
            </i>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
