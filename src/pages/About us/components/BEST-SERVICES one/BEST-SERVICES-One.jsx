import React from 'react'
import LazyLoad from 'react-lazyload';
import img_your_image_mask from "../../../../images/img_your_image_mask.png"
export default function BESTSERVICESAboutOne() {
  return (
    <>
    <section className='BESTSERVICES'>
<div className="container overflow-hidden">
    <div className="row d-flex justify-content-center overflow-hidden">
        <div className="col-lg-4 col-md-6">
          <LazyLoad>
        <img src={img_your_image_mask} width={50} height={100} alt={img_your_image_mask} className=' w-100' loading='lazy' />
          </LazyLoad>
        </div>
        <div className="col-lg-5 col-md-6">
            <h3>We will allways provide the best services</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eius necessitatibus aspernatur dolorum aliquid facilis exercitationem deserunt nemo eveniet itaque, magnam nisi tenetur molestiae dolor vitae corporis! Esse voluptas necessitatibus autem labore quod, earum tenetur corrupti reprehenderit aut suscipit natus. Commodi natus cum at esse molestiae iste dicta velit enim?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eius necessitatibus aspernatur dolorum aliquid facilis exercitationem deserunt nemo eveniet itaque, magnam nisi tenetur molestiae dolor vitae corporis! Esse voluptas necessitatibus autem labore quod, earum tenetur corrupti reprehenderit aut suscipit natus. Commodi natus cum at esse molestiae iste dicta velit enim?
                </p>
        </div>
    </div>
</div>
    </section>
    </>
  )
}
