import React from "react";
import trek1 from "../../assets/trek1.jpeg";
import Resuablecard from "../reusable/resuablecard";
import Basedreadcums from "../breadcums/breadcums";
import upper from "../../assets/upper.jpg"
import SortControls from "../sortby/sortby";

const ServicesPage = () => {
  return (
    <>
    <div className="relative h-72 bg-gray-300 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center  "
        style={{
          backgroundImage: `url(${trek1})`,
        }}

       
        
      > </div>
    </div>
    <div className="text-center items-center flex flex-col " ><Basedreadcums title1={"Home"} title2={"Products"} /></div>

    <div className="flex justify-center items-center h-full">
  <SortControls />
</div>

    

    <div className="grid grid-cols-1 md:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mx-auto max-w-7xl md:px-10">
    <Resuablecard title={"Everest"} para={"sahfjdsgmfkmdsaf"} img={upper}/>
    <Resuablecard title={"Everest"} para={"sahfjdsgmfkmdsaf"} img={upper}/>
    <Resuablecard title={"Everest"} para={"sahfjdsgmfkmdsaf"} img={upper}/>
    <Resuablecard title={"Everest"} para={"sahfjdsgmfkmdsaf"} img={upper}/>
    <Resuablecard title={"Everest"} para={"sahfjdsgmfkmdsaf"} img={upper}/>
    <Resuablecard title={"Everest"} para={"sahfjdsgmfkmdsaf"} img={upper}/>
</div>


    </>
  );
};

export default ServicesPage;
