import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useTranslation } from 'react-i18next';
export default function ContactForm() {
    const { t } = useTranslation();
    const [sent, setSent] = useState(false);
    let mySchema = Yup.object({
        name:Yup.string().required(t('contact.v.nameRequired')).min(3,t('contact.v.nameMin')).max(50, t('contact.v.nameMax')) ,
        email:Yup.string().email(t('contact.v.emailInvalid')).required(t('contact.v.emailRequired')),
        phone:Yup.string().test('phone', t('contact.v.phoneInvalid'), value => {
            if (!value) return false;
            const phoneNumber = parsePhoneNumberFromString(value);
            return phoneNumber && phoneNumber.isValid();
          }).required(t('contact.v.phoneRequired')),
        message:Yup.string().required(t('contact.v.messageRequired')).min(10,t('contact.v.messageMin')).max(500, t('contact.v.messageMax'))
      })
      let formik = useFormik({
        initialValues:{
          name: "",
          email:"",
          message:"",
          remessage:"",
          phone:""
        },
        validationSchema:mySchema,
        onSubmit:(values)=>{
          getData(values)
        }
      })
      // No backend yet: confirm to the visitor and reset the form.
      function getData(values){
        console.log(values)
        setSent(true)
        formik.resetForm()
      }
  return (
    <section className='contactForm'>
     <div className="container">
        <div className="row g-4">
            <div className="col-lg-6">
              <div className="contact-map">
                <iframe title={t('contact.office')} src="https://www.google.com/maps?q=Business+Bay,+Dubai&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-card">
                <h2>{t('contact.send')}</h2>
                <p className="form-intro">{t('contact.formIntro')}</p>
                {sent ? (
                  <div className="form-success" role="status">
                    <p>{t('contact.success')}</p>
                    <button type="button" onClick={() => setSent(false)}>{t('contact.sendAnother')}</button>
                  </div>
                ) : (
                <form onSubmit={formik.handleSubmit} noValidate>
  <div className="mb-3">
    <label htmlFor="contact-name">{t('contact.name')}</label>
    <input type="text" className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name='name' id="contact-name" autoComplete="name"/>
    {formik.touched.name && formik.errors.name ? <p className='text-danger'>{formik.errors.name}</p>: ""}
  </div>
  <div className="mb-3">
    <label htmlFor="contact-email">{t('contact.email')}</label>
    <input type="email" className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email' id="contact-email" autoComplete="email"/>
    {formik.touched.email && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p>: ""}
  </div>
  <div className="mb-3 phone-field">
    <label htmlFor="contact-phone">{t('contact.phoneLabel')}</label>
    <PhoneInput
    inputStyle={{ width: '100%', padding: '15px', backgroundColor: '#F4F7FB', border: '1px solid #d9dee5', borderRadius: '8px', direction: 'ltr' }}
    countrySelectorStyleProps={{ buttonStyle: { backgroundColor: '#F4F7FB', border: '1px solid #d9dee5', borderRadius: '8px', height: '100%' } }}
    defaultCountry="ae" onChange={phone => formik.setFieldValue('phone', phone)} onBlur={formik.handleBlur} value={formik.values.phone} name='phone' inputProps={{ id: 'contact-phone' }}/>
    {formik.touched.phone && formik.errors.phone ? <p className='text-danger'>{formik.errors.phone}</p>: ""}
  </div>
  <div className="mb-3">
    <label htmlFor="contact-message">{t('contact.message')}</label>
    <textarea className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} name='message' id="contact-message" rows="5"></textarea>
    {formik.touched.message && formik.errors.message ? <p className='text-danger'>{formik.errors.message}</p>: ""}
  </div>
  <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="send-btn">{t('contact.submit')}</button>
</form>
                )}
              </div>
            </div>
        </div>
     </div>
    </section>
  )
}
