import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Breadcrumb/>
    <ScrollToTopButton/>
    <Outlet/>
    <Footer/>
    </>
  )
}
