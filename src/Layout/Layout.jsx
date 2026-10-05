import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { useEffect } from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'

export default function Layout() {
  const { pathname } = useLocation();
  // new page => start at the top (footer links would otherwise keep the scroll position)
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
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
