import React, { useState } from 'react';
import "../../../Home/component/carType/CarType.css"
import { Link } from 'react-router-dom';
export default function FeatureCars() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
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
