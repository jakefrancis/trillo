import React from "react";
import CTA from "./CTA";
import Detail from "./Detail";
import Gallery from "./Gallery";
import Overview from "./Overview";

const Main = () => {
  return (
  <div className="hotel-view">
   <Gallery />
   <Overview hotelName='Hotel Las Palmas' rating={8.6}/>
   <Detail />
   <CTA />
  </div>
  )
};

export default Main;
