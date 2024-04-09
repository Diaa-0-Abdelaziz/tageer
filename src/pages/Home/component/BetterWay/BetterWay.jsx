import React from 'react'
import { BsListUl } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { LuCheckSquare } from "react-icons/lu";
import line1 from "../../../../images/Line@2x11.png"
import line2 from "../../../../images/Line@2x.png"
import paner from "../../../../images/img_rum_banner.png"
import "./BetterWay.css"
export default function BetterWay() {
  return (
    <>
    <section className='BetterWay text-center'>
      <div className="container">
      <div className="img_cover">
        <img src={paner} alt={paner} width={100} className=' w-100'  loading='lazy'/>
      </div>
      <div className='text'>
      <h3>Better Way to Find Your Perfect Car</h3>
      <p>In hac habitasse platea dictumst. In pharetra tellus eu justo tincidunt bibendum. Morbi rutrum elit ligula, eget fringilla sem pellentesque aliquam suspendisse.</p>
      </div>
      <ul className=' list-unstyled d-flex flex-nowrap align-items-center flex-nowrap justify-content-center'>
        <li className='notLine'>
            <div><BsListUl/></div>
            <span className='head badge text-dark'>Choose Your Car</span>
            <span className='exp px-1 pb-2'>Select a car using search or catalog.</span>
        </li>
        <li>
            <img src={line1} alt={line1} width={100} loading='lazy'/>
        </li>
        <li className='notLine'>
        <div><CiCalendar/></div>
        <span className=' head badge text-dark'>Contact Your Dealer</span>
        <span className=' exp px-1 pb-2'>After you’ve selected a car a dealer will contact you.</span>
        </li>
        <li>
            <img src={line2} alt={line2} width={100} loading='lazy'/>
        </li>
        <li className='notLine'>
        <div><LuCheckSquare/></div>
        <span className=' head badge text-dark'>Get Your Car</span>
        <span className=' exp px-1 pb-2'>Here you are! Your car is book and waiting for you.</span>
        </li>
      </ul>
      </div>
    </section>
    </>
  )
}

