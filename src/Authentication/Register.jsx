import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import "./Register.css"
import { Link } from 'react-router-dom';
export default function Register() {
    let mySchema = Yup.object({
        name:Yup.string().required('name is required').min(3,'min is 3 char').max(15, 'max is 15 char') ,
        email:Yup.string().email("email isn't valid").required('email is required'),
        phone:Yup.string().test('phone', 'Invalid phone number', value => {
            if (!value) return false;
            const phoneNumber = parsePhoneNumberFromString(value, 'UA'); 
            return phoneNumber && phoneNumber.isValid();
          }).required('Phone number is required'),
          password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,15}$/, 'password must start captial letter and least 6 char'),
    rePassword:Yup.string().required('password is required').oneOf([Yup.ref('password')], 'password not match'),
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
    <section className='Auth position-fixed top-0 bottom-0 start-0 end-0'>
    <div className="container d-flex align-items-center justify-content-center h-100">
      
            <div className="form_content">
                <h6>Sign Up</h6>
                <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <input type="text" placeholder='Full Name' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name='name'/>
                    {formik.touched.name && formik.errors.name ? <p className='text-danger'>{formik.errors.name}</p>: ""}
                </div>
                <div className="mb-3">
                    <input type="email" placeholder='Email' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email'/>
                    {formik.touched.email && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p>: ""}
                </div>
                <div className="mb-3">
                    <PhoneInput 
                    inputStyle={{
                        width: '100%',
                        padding: '15px',
                        backgroundColor:"#E6F6FF",
                        border: 'none',
                    }}
                    defaultCountry="ua" onChange={phone => formik.setFieldValue('phone', phone)} onBlur={formik.handleBlur} value={formik.values.phone} name='phone'/>
                    {formik.touched.phone && formik.errors.phone ? <p className='text-danger'>{formik.errors.phone}</p>: ""}
                </div>

                <div className="mb-3">
                <input type="password" placeholder='Password' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name='password'/>
                {formik.touched.password && formik.errors.password ? <p className='text-danger'>{formik.errors.password}</p>: ""}
                </div>

                <div className="mb-3">
                    <input type="password" placeholder=' RePassword' className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} name='rePassword'/>
                    {formik.touched.rePassword && formik.errors.rePassword ? <p className='text-danger'>{formik.errors.rePassword}</p>: ""}
                </div>
                
                <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="text-uppercase">Sign up</button>
                <p>By Continuing you agree to our <Link>terms & conditions</Link> and <Link>privacy</Link></p>
                <div className=' d-flex flex-column'>
                <span className='signFace my-2'>Sign up with Facebook <FaFacebookF/></span>
                 <span className='SignGoogle my-2'>Sign up with Google <FcGoogle/></span>
                </div>
                </form>
            </div>
       
     </div>
    </section>
    </>
  )
}
