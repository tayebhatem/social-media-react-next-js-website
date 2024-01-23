import Link from "next/link";
import Avatar from "./Avatar";


export default function Header({setShowNavigation,showNavigation}) {
    const showNav=()=>{
     
      setShowNavigation(!showNavigation);
      }

    const url="https://scontent.falg5-2.fna.fbcdn.net/v/t39.30808-6/325350524_700610724796391_8680551698288473632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFoYW-mF02dsaQgYaXqkaXSQ5b59qlqS-dDlvn2qWpL52kJaiwHkj-huMm7e2bMHVS-leXfaWdMs759jzsi0syi&_nc_ohc=TQ0ONJqC6XEAX-Syr5i&_nc_ht=scontent.falg5-2.fna&oh=00_AfDQPLohqIChCu319erYqWCvl2RFmHfg4B8a7W4TeRh16g&oe=65B28D0B";
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
    <Avatar url={url}/>
    </Link>
  </div>
   </div>
    </div>
  )
}
