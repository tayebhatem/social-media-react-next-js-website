import Navigation from "@/Components/Navigation";
import Header from "./Header";
import { useEffect, useState } from "react";
import { UserContext } from "@/Context/UserContext";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Layout({children}) {
  const[showNavigation,setShowNavigation]=useState(false);
  const supabase=useSupabaseClient();
  const [user,setUser]=useState(null);
  const session=useSession();
    
 useEffect(()=>{
  const fetchUser=async()=>{
    try {
     const userId=session.user.id;
    await supabase.from('profiles').select('*').eq('id',userId).single().then(
     result=>{
      
       
       setUser(result.data);
    
     }
    );
     
    } catch (error) {
     console.log(error.message)
    }
     }
    
   fetchUser();
   
 })
  
  return (
    <UserContext.Provider value={{user}}>
    <div className="">
      <Header  setShowNavigation={setShowNavigation} showNavigation={showNavigation}/>
    <div className="px-3 lg:px-0 mt-24 ">
    
      <div className="flex-col flex md:flex-row  max-w-4xl mx-auto mt-6 gap-3 ">
   
    
    <Navigation showNavigation={showNavigation}/>
    <div className="grow">
   {children}
     </div>
   </div>
    </div>
    </div>
    </UserContext.Provider>
  )
}
