import React from 'react';
import Basedreadcums from '../breadcums/breadcums';
import Resuablecard from '../reusable/resuablecard';
import blog123 from "../../assets/blog123.jpg"

const Blogspage = () => {
  return (
    <>
    <div className="relative h-72 bg-gray-300 overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center  "
      style={{
        backgroundImage: `url(${blog123})`,
      }}

     
      
    > </div>
  </div>
  <div className="text-center items-center flex flex-col " ><Basedreadcums title1={"Home"} title2={"Blogs"} /></div>

  <div className="grid grid-cols-1 md:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mx-auto max-w-7xl md:px-10">
    <Resuablecard title={"Everest"} para={"sahfjdsgmfkmdsaf"} img={blog123}/>
    <Resuablecard title={"Everest"} para={"sahfjdsgmfkmdsaf"} img={blog123}/>
    <Resuablecard title={"Everest"} para={"sahfjdsgmfkmdsaf"} img={blog123}/>
    <Resuablecard title={"Everest"} para={"sahfjdsgmfkmdsaf"} img={blog123}/>
    <Resuablecard title={"Everest"} para={"sahfjdsgmfkmdsaf"} img={blog123}/>
    <Resuablecard title={"Everest"} para={"sahfjdsgmfkmdsaf"} img={blog123}/>
</div>
  </>
  )
}

export default Blogspage