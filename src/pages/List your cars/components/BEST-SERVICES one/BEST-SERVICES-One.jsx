import React from 'react'
import LazyLoad from 'react-lazyload';
import img_your_image_mask1 from "../../../../images/mok up@2x0010.png"
import img_your_image_mask2 from "../../../../images/Scene-6@2x0012.png"
import img_your_image_mask3 from "../../../../images/Scene-6@2x0012.png"
export default function BESTSERVICESOne() {

  let BESTSERVICES=[
    {
      img:img_your_image_mask1,
      header:"We will allways provide the best services",
      explanation:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eius necessitatibus aspernatur dolorum aliquid facilis exercitationem deserunt nemo eveniet itaque, magnam nisi tenetur molestiae dolor vitae corporis! Esse voluptas necessitatibus autem labore quod, earum tenetur corrupti reprehenderit aut suscipit natus. Commodi natus cum at esse molestiae iste dicta velit enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eius necessitatibus aspernatur dolorum aliquid facilis exercitationem deserunt nemo eveniet itaque, magnam nisi tenetur molestiae dolor vitae corporis! Esse voluptas necessitatibus autem labore quod, earum tenetur corrupti reprehenderit aut suscipit natus. Commodi natus cum at esse molestiae iste dicta velit enim?"
    },
    {
      img:img_your_image_mask2,
      header:"We will allways provide the best services",
      explanation:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eius necessitatibus aspernatur dolorum aliquid facilis exercitationem deserunt nemo eveniet itaque, magnam nisi tenetur molestiae dolor vitae corporis! Esse voluptas necessitatibus autem labore quod, earum tenetur corrupti reprehenderit aut suscipit natus. Commodi natus cum at esse molestiae iste dicta velit enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eius necessitatibus aspernatur dolorum aliquid facilis exercitationem deserunt nemo eveniet itaque, magnam nisi tenetur molestiae dolor vitae corporis! Esse voluptas necessitatibus autem labore quod, earum tenetur corrupti reprehenderit aut suscipit natus. Commodi natus cum at esse molestiae iste dicta velit enim?"
    },
    {
      img:img_your_image_mask3,
      header:"We will allways provide the best services",
      explanation:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eius necessitatibus aspernatur dolorum aliquid facilis exercitationem deserunt nemo eveniet itaque, magnam nisi tenetur molestiae dolor vitae corporis! Esse voluptas necessitatibus autem labore quod, earum tenetur corrupti reprehenderit aut suscipit natus. Commodi natus cum at esse molestiae iste dicta velit enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eius necessitatibus aspernatur dolorum aliquid facilis exercitationem deserunt nemo eveniet itaque, magnam nisi tenetur molestiae dolor vitae corporis! Esse voluptas necessitatibus autem labore quod, earum tenetur corrupti reprehenderit aut suscipit natus. Commodi natus cum at esse molestiae iste dicta velit enim?"
    }
  ]
  return (
    <>
     {BESTSERVICES.map((service, index)=>
    <section className='BESTSERVICES' key={index}>
    <div className="container overflow-hidden">
        <div className="row d-flex justify-content-center overflow-hidden">
          {index % 2 === 0 ? 
          
          <div className="col-lg-4 col-md-6">
          <LazyLoad>
        <img src={service.img} alt={service.img} className=' w-100' loading='lazy' />
          </LazyLoad>
        </div>
        :
        <div className="col-lg-5 col-md-6">
        <h3>{service.header}</h3>
        <p>{service.explanation}</p>
    </div>
        }
            {index % 2 === 0 ? 
              <div className="col-lg-5 col-md-6">
              <h3>{service.header}</h3>
              <p>{service.explanation}</p>
          </div>
          :
          <div className="col-lg-4 col-md-6">
          <LazyLoad>
        <img src={service.img} alt={service.img} className=' w-100' loading='lazy' />
          </LazyLoad>
        </div>
            }
        </div>
    </div>
        </section>  
  )}
    </>
  )
}
