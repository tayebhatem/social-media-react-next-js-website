import Link from "next/link";
import Avatar from "./Avatar";
import { useContext } from "react";
import { UserContext } from "@/Context/UserContext";


export default function Header({setShowNavigation,showNavigation}) {
    const showNav=()=>{
     
      setShowNavigation(!showNavigation);
      }

   const {user}=useContext(UserContext);
  return (
    <div className=" bg-white  py-3 px- border-t-2 shadow-sm fixed w-full top-0 z-10 md:z-40">
   <div className="px-3 lg:px-0 flex justify-between items-center max-w-4xl mx-auto">

   <div className="flex gap-6 items-center">
   <div className="font-bold text-2xl">
        LogoSocial
    </div>
    <div className="flex gap-2 bg-gray-100 px-3 py-2 rounded-full ">
   <span className="text-gray-500">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
   </span>

    <input className="hidden sm:block outline-none bg-transparent grow" placeholder="Search somthing..."/>
    </div>
   </div>
  <div className="flex items-center gap-3">
  <span className="lg:hidden cursor-pointer" onClick={showNav}>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</span>
    <Link href={'/profile/posts'}>
   {user && <Avatar url={user.avatar}/>}
    </Link>
  </div>
   </div>
    </div>
  )
}
