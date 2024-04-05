import React from 'react';
import { Link } from 'react-router-dom';
export default function FeatureCars() {
  return (
    <>
    <section className='CarType pt-3'>
        <div className="container">
        <div className='CarType_Header d-flex justify-content-between mb-3 align-items-center'>
        <h3 className=''>Feature Cars</h3>
        <div className='line'></div>
        <Link to="/ViewAll" className='ViewAll badge ms-2 text-decoration-none'><span className=''>View all</span></Link>
        </div>
        </div>
    </section>
    </>
  )
}
