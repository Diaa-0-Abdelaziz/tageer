import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useTranslation } from 'react-i18next';
export default function ContactForm() {
    const { t } = useTranslation();
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
      function getData(values){
        console.log(values)
      }
  return (
    <section className='contactForm'>
     <div className="container">
        <div className="row">
            <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7220.928369635145!2d55.281079!3d25.187564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d818bf1f6e3%3A0x86248e6468b6ed4e!2sTAJEER%20RENT%20A%20CAR!5e0!3m2!1sen!2skw!4v1712047952927!5m2!1sen!2skw" className=' w-100 h-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='company_Location'></iframe>
            </div>
            <div className="col-md-5">
                <h2>{t('contact.send')}</h2>
                <form onSubmit={formik.handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputName1">{t('contact.name')}</label>
    <input type="text" className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name='name' id="exampleInputName1"/>
    {formik.touched.name && formik.errors.name ? <p className='text-danger'>{formik.errors.name}</p>: ""}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1">{t('contact.email')}</label>
    <input type="email" className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email' id="exampleInputEmail1"/>
    {formik.touched.email && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p>: ""}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputphone1">{t('contact.phoneLabel')}</label>
    <PhoneInput 
    inputStyle={{
        width: '100%',
        padding: '15px',
        backgroundColor:"#E6F6FF",
        border: 'none',
    }}
    defaultCountry="ae" onChange={phone => formik.setFieldValue('phone', phone)} onBlur={formik.handleBlur} value={formik.values.phone} name='phone' id="exampleInputphone1"/>
    {formik.touched.phone && formik.errors.phone ? <p className='text-danger'>{formik.errors.phone}</p>: ""}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputmessage1">{t('contact.message')}</label>
    <textarea className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} name='message' id="exampleInputmessage1" cols="40" rows="5"></textarea>
    {formik.touched.message && formik.errors.message ? <p className='text-danger'>{formik.errors.message}</p>: ""}
  </div>
  
  <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="text-uppercase">{t('contact.submit')}</button>
  
</form>
            </div>
        </div>
     </div>
    </section>
  )
}
