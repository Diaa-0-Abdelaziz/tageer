import { useTranslation } from 'react-i18next';
import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "./Register.css"

export default function EnterCode({toggleVisibility, writeNewPASSWORD}) {
    const { t } = useTranslation();
    let mySchema = Yup.object({
        resetCode:Yup.string().required(t('auth.v.codeRequired')).matches(/^[0-9]{6}$/, t('auth.v.codeRule'))
      })
      
      let initialValues = {resetCode:""}
      let formik = useFormik({
        initialValues:initialValues,
        validationSchema:mySchema,
        onSubmit:(values)=>{
        getEmail(values)
        }
        
      })
 
       function getEmail(values){
        console.log(values)
      }
  return (
    <section className='Auth position-fixed top-0 bottom-0 start-0 end-0'>
    <div className="container d-flex align-items-center justify-content-center h-100">
      
            <div className="form_content">
                <h6 className=' position-relative'>{t('auth.otpTitle')} <IoCloseOutline onClick={() => toggleVisibility()} className='close_Window position-absolute me-5 end-0 fs-4 top-50 translate-middle-y'/></h6>
                <form onSubmit={formik.handleSubmit}>
             
             
                  <div className="mb-3">
                  <input type="text" className="inputsForm" placeholder={t('auth.otpPlaceholder')} value= {formik.values.resetCode || ''} name="resetCode" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                  {formik.touched.resetCode && formik.errors.resetCode ? <p className='text-danger'>{formik.errors.resetCode}</p>: ""}
                  </div>
                    <span className="text-uppercase forgot mb-4" >{t('auth.resend')}</span>
                    <button type="submit" className="text-uppercase mt-3 mb-5" disabled={!(formik.isValid && formik.dirty)} onClick={() => writeNewPASSWORD()}>{t('auth.continue')}</button>
                </form>
            </div>
       
     </div>
    </section>
  )
}
