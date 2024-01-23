import Navigation from "@/Components/Navigation";
import Header from "./Header";
import { useEffect, useState } from "react";

export default function Layout({children}) {
  const[showNavigation,setShowNavigation]=useState(false);

 
  
  return (
    <div className="">
      <Header  setShowNavigation={setShowNavigation} showNavigation={showNavigation}/>
    <div className="px-3 lg:px-0 mt-24 ">
      <div className="flex-col flex md:flex-row  max-w-4xl mx-auto mt-4 gap-3 ">
   
    
    <Navigation showNavigation={showNavigation}/>
    <div className="grow">
   {children}
     </div>
   </div>
    </div>
    </div>
  )
}
