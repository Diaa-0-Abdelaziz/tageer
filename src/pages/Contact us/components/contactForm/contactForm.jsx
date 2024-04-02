import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
export default function ContactForm() {
    let mySchema = Yup.object({
        name:Yup.string().required('name is required').min(3,'min is 3 char').max(15, 'max is 15 char') ,
        email:Yup.string().email("email isn't valid").required('email is required'),
        phone:Yup.string().test('phone', 'Invalid phone number', value => {
            if (!value) return false;
            const phoneNumber = parsePhoneNumberFromString(value, 'UA'); 
            return phoneNumber && phoneNumber.isValid();
          }).required('Phone number is required'),
        message:Yup.string().required('message is required').min(10,'You shold write 10 char or more').max(15, 'max length 100 char')
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7220.928369635145!2d55.281079!3d25.187564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d818bf1f6e3%3A0x86248e6468b6ed4e!2sTAJEER%20RENT%20A%20CAR!5e0!3m2!1sen!2skw!4v1712047952927!5m2!1sen!2skw" className=' w-100' height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-md-5">
                <h2>SEND A MESSAGE</h2>
                <form onSubmit={formik.handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputName1">Your Name:</label>
    <input type="text" className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name='name' id="exampleInputName1"/>
    {formik.touched.name && formik.errors.name ? <p className='text-danger'>{formik.errors.name}</p>: ""}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1">Your Email:</label>
    <input type="email" className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email' id="exampleInputEmail1"/>
    {formik.touched.email && formik.errors.email ? <p className='text-danger'>{formik.errors.email}</p>: ""}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputphone1">Your Phone Number:</label>
    <PhoneInput 
    inputStyle={{
        width: '100%',
        padding: '15px',
        backgroundColor:"#E6F6FF",
        border: 'none',
    }}
    defaultCountry="ua" onChange={phone => formik.setFieldValue('phone', phone)} onBlur={formik.handleBlur} value={formik.values.phone} name='phone' id="exampleInputphone1"/>
    {formik.touched.phone && formik.errors.phone ? <p className='text-danger'>{formik.errors.phone}</p>: ""}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputmessage1">Your Message:</label>
    <textarea className="inputsForm" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} name='message' id="exampleInputmessage1" cols="40" rows="5"></textarea>
    {formik.touched.message && formik.errors.message ? <p className='text-danger'>{formik.errors.message}</p>: ""}
  </div>
  
  <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="text-uppercase">Send Message</button>
  
</form>
            </div>
        </div>
     </div>
    </section>
  )
}
