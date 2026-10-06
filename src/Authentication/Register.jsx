import { useTranslation } from 'react-i18next';
import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import "./Register.css"
import { Link } from 'react-router-dom';
export default function Register({ toggleVisibility }) {
    const { t } = useTranslation();
    
    let mySchema = Yup.object({
        name:Yup.string().required(t('auth.v.nameRequired')).min(3,t('auth.v.nameMin')).max(50, t('auth.v.nameMax')) ,
        email:Yup.string().email(t('auth.v.emailInvalid')).required(t('auth.v.emailRequired')),
        phone:Yup.string().test('phone', t('auth.v.phoneInvalid'), value => {
            if (!value) return false;
            const phoneNumber = parsePhoneNumberFromString(value, 'UA'); 
            return phoneNumber && phoneNumber.isValid();
          }).required('Phone number is required'),
          password:Yup.string().required(t('auth.v.passwordRequired')).matches(/^[A-Z][a-z0-9]{5,15}$/, t('auth.v.passwordRule')),
    rePassword:Yup.string().required(t('auth.v.passwordRequired')).oneOf([Yup.ref('password')], t('auth.v.passwordMismatch')),
      })
      let formik = useFormik({
        initialValues:{
          name: "",
          email:"",
          phone:"",
          password:"",
          rePassword:""
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
    <>
    {/* {isVisible && ( */}

    
    <section className='Auth position-fixed top-0 bottom-0 start-0 end-0'>
    <div className="container d-flex align-items-center justify-content-center h-100">
      
            <div className="form_content">
                <h6 className=' position-relative'>{t('auth.signUp')} <IoCloseOutline onClick={() => toggleVisibility()} className='close_Window position-absolute me-5 end-0 fs-4 top-50 translate-middle-y'/></h6>
                <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <input type="text" placeholder={t('auth.fullName')} className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name='name'/>
                    {formik.touched.name && formik.errors.name ? <p className='text-danger'>{formik.errors.name}</p>: ""}
                </div>
                <div className="mb-3">
                    <input type="email" placeholder={t('auth.email')} className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email'/>
                    {formik.touched.email && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p>: ""}
                </div>
                <div className="mb-3">
                    <PhoneInput
                    inputStyle={{
                        width: '100%',
                        padding: '12px 14px',
                        height: '46px',
                        backgroundColor:"#F4F7FB",
                        border: '1px solid #d9dee5',
                        borderRadius: '8px',
                        fontSize: '15px',
                    }}
                    countrySelectorStyleProps={{ buttonStyle: { height: '46px', backgroundColor: '#F4F7FB', border: '1px solid #d9dee5', borderRadius: '8px', padding: '0 8px' } }}
                    defaultCountry="ae" onChange={phone => formik.setFieldValue('phone', phone)} onBlur={formik.handleBlur} value={formik.values.phone} name='phone'/>
                    {formik.touched.phone && formik.errors.phone ? <p className='text-danger'>{formik.errors.phone}</p>: ""}
                </div>

                <div className="mb-3">
                <input type="password" placeholder={t('auth.password')} className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name='password'/>
                {formik.touched.password && formik.errors.password ? <p className='text-danger'>{formik.errors.password}</p>: ""}
                </div>

                <div className="mb-3">
                    <input type="password" placeholder={t('auth.rePassword')} className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} name='rePassword'/>
                    {formik.touched.rePassword && formik.errors.rePassword ? <p className='text-danger'>{formik.errors.rePassword}</p>: ""}
                </div>
                
                <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="text-uppercase">{t('auth.submitSignUp')}</button>
                <p>{t('auth.agree')} <Link className=' badge' to="/TermsAndCondition" onClick={() => toggleVisibility()}>{t('auth.terms')}</Link> {t('auth.and')} <Link className=' badge' to="/Privacy" onClick={() => toggleVisibility()}>{t('auth.privacy')}</Link></p>
                <div className=' d-flex flex-column'>
                <span className='signFace my-2'>{t('auth.signUpFacebook')} <FaFacebookF/></span>
                 <span className='SignGoogle my-2'>{t('auth.signUpGoogle')} <FcGoogle/></span>
                </div>
                </form>
            </div>
       
     </div>
    </section>
    {/* )} */}
    </>
  )
}
