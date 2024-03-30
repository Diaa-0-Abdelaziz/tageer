import React from 'react'
import { BsListUl } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { LuCheckSquare } from "react-icons/lu";
import line1 from "../../../../images/Line@2x11.png"
import line2 from "../../../../images/Line@2x.png"
import "./BetterWay.css"
export default function BetterWay() {
  return (
    <>
    <section className='BetterWay text-center'>
      <div className="container">
      <div className="img_cover"></div>
      <div className='text'>
      <h3>Better Way to Find Your Perfect Car</h3>
      <p>In hac habitasse platea dictumst. In pharetra tellus eu justo tincidunt bibendum. Morbi rutrum elit ligula, eget fringilla sem pellentesque aliquam suspendisse.</p>
      </div>
      <ul className=' list-unstyled d-flex align-items-center justify-content-center'>
        <li className='notLine'>
            <div><BsListUl/></div>
            <h5>Choose Your Car</h5>
            <h6>Select a car using search or catalog.</h6>
        </li>
        <li>
            <img src={line1} alt={line1} />
        </li>
        <li className='notLine'>
        <div><CiCalendar/></div>
        <h5>Contact Your Dealer</h5>
        <h6>After you’ve selected a car a dealer will contact you.</h6>
        </li>
        <li>
            <img src={line2} alt={line2} />
        </li>
        <li className='notLine'>
        <div><LuCheckSquare/></div>
        <h5>Get Your Car</h5>
        <h6>Here you are! Your car is book and waiting for you.</h6>
        </li>
      </ul>
      </div>
    </section>
    </>
  )
}

