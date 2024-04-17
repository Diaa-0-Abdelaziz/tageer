import React from 'react'
import img1 from "../../../../../images/d61540b0-3b21-11ed-9155-3d23b669ca31-marguerite-profile.png"
import MainCard from '../../../../../ImportantSlicesSharedComponents/mainCard';
export default function RentCarWithDriverProducts() {
  
    
    
    
    
      let products = [
        {
          id:1,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
        {
          id:2,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
        {
          id:3,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
        {
          id:4,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
        {
          id:5,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
        {
          id:6,
          title:"BMW X5 Convertible slider ",
          img:img1,
          whatsapp:12553355,
          email:"info@mail.com",
          call:1235566,
        },
      ]
    
    
    
      return (
        <section className='overflow-hidden RentSUVLuxuryCursel'>
       <div className="container main-slider mb-5">
        <div className="row">
          {products.map((pro)=>
           <MainCard
           key={pro.id}
           productId = {pro.id}
           productImage = {pro.img}
           productTitle = {pro.title}
           ownerWhatsapp = {pro.whatsapp}
           ownerEmail = {pro.email}
           ownerCall = {pro.call}
           /> 
          )}
        </div>
       </div>
        </section>
      )
    }
    