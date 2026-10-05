import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Page heading + lead + expandable description, all read from pages.<id> in the locale files.
// `values` fills {{placeholders}}; `children` renders extra content under the text.
export default function PageIntro({ id, values = {}, lead, title, body, className = 'CarType pt-3 mb-4', children }) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphs = body || t(`pages.${id}.body`, { returnObjects: true, ...values });
  return (
    <section className={className}>
      <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
          <h3 className=''>{title ?? t(`pages.${id}.title`, values)}</h3>
        </div>
        <p className=' fw-bold'>{lead ?? t(`pages.${id}.lead`, values)}</p>
        <p className={` position-relative ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {Array.isArray(paragraphs) ? paragraphs.join(' ') : paragraphs}
          <span onClick={() => setIsExpanded(!isExpanded)} className=" position-absolute bottom-0 end-0 mt-2 read_more text-decoration-underline fw-bold">
            {isExpanded ? t('common.readLess') : t('common.readMore')}
          </span>
        </p>
        {children}
      </div>
    </section>
  );
}
