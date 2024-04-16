import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IoCloseOutline } from 'react-icons/io5';
export default function Login({ toggleVisibility, forgotPASSWORD}) {

    let mySchema = Yup.object({
        email:Yup.string().email("email isn't valid").required('email is required'),
          password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,15}$/, 'password must start captial letter and least 6 char'),
      })
      let formik = useFormik({
        initialValues:{
          email:"",
          password:"",
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
    <section className='Auth position-fixed top-0 bottom-0 start-0 end-0'>
    <div className="container d-flex align-items-center justify-content-center h-100">
      
            <div className="form_content">
                <h6  className=' position-relative'>Sign in <IoCloseOutline onClick={() => toggleVisibility()} className='close_Window position-absolute me-5 end-0 fs-4 top-50 translate-middle-y'/></h6>
                <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <input type="email" placeholder='Email' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email'/>
                    {formik.touched.email && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p>: ""}
                </div>

                <div className="mb-3">
                <input type="password" placeholder='Password' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name='password'/>
                {formik.touched.password && formik.errors.password ? <p className='text-danger'>{formik.errors.password}</p>: ""}
                </div>
                
               <div className=' d-flex flex-column align-items-center'>
               <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="text-uppercase my-2">Sign in</button>
                <span className="text-uppercase forgot my-2" onClick={() => forgotPASSWORD()}>forgot password</span>
               </div>
                <div className=' d-flex flex-column'>
                <span className='signFace my-2'>Sign in with Facebook <FaFacebookF/></span>
                 <span className='SignGoogle my-2'>Sign in with Google <FcGoogle/></span>
                </div>
                </form>
            </div>
       
     </div>
    </section>
    </>
  )
}
