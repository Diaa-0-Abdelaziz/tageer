import React from 'react'
import ContactUsHeader from './components/ContactUsHeader/ContactUsHeader'
import Info from './components/info/info'
import ContactInfo from './components/contactInfo/ContactInfo'
import ContactForm from './components/contactForm/contactForm'

export default function ContactUs() {
  return (
    <>
    <ContactUsHeader/>
    <Info/>
    <ContactInfo/>
    <ContactForm/>
    </>
  )
}
