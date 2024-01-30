import Link from 'next/link'
import Card from './Card'
import { useRouter } from 'next/router'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState,useEffect } from 'react';


export default function Navigation({showNavigation}) {
  const session=useSession();
  const router=useRouter();
  const {pathname}=router;
  const activeElement="relative flex gap-2 p-3 bg-primary rounded-md text-white shadow-md hover:shadow-md hover:rounded-md hover:scale-110 transition-all";
  const nonActiveElement="relative flex gap-2 p-3 hover:bg-primary hover:text-white hover:shadow-md hover:rounded-md hover:scale-110 transition-all cursor-pointer";
  const supabase=useSupabaseClient();
  const [notification,setNotification]=useState([]);
  const updateOnline=async()=>{
   
    try{
      await supabase.
       from('profiles').update({online:false}).eq('id',session.user.id).then(
        result=>{
          supabase.auth.signOut();
        }
       );
      } catch (error) {
       console.log(error.message);
      }
  }
  const logOut=()=>{
     updateOnline();
    
    
   
  }
  const updateNotification=()=>{
    supabase.from('notifications').update('seen',true).eq('idUser',session.user.id).then(
      result=>{
   if(!result.error){
    fetchNotifications();
   }
      }
    );
  }
  const fetchNotifications=()=>{
    try {
      supabase.from('notifications').select('*,post!inner(*)').eq('post.userId',session.user.id).neq('userId',session.user.id).eq('status','unseen').then(
        result=>{
          setNotification(result.data)
        }
      )
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    
    fetchNotifications();
 
  },[])
  return (
     <div className={showNavigation? "fixed top-0 z-30 w-3/5 md:w-1/3 md:static left-0 transition-all":"fixed top-0 z-30 w-3/5 md:w-1/3 md:static -left-3/4 transition-all"}>
       <Card fullHight={true}>
    <div className='px-4 pt-2'>
    <h2 className="text-gray-400 mb-3">Navigation</h2>
    <Link href={'/'}>
    <div  className={pathname==='/'?activeElement:nonActiveElement} >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
     </svg>
     Home
     </div>
    </Link>
    <Link href={session ?'/profile/'+session.user.id+'/posts':''}>
    <div  className={session && pathname==='/profile/'+session.user.id+'/posts'?activeElement:nonActiveElement} >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
     Profile
     </div>
    </Link>
     <Link href={'/navbare/messages'}>
     <div href="" className={pathname==='/profile/friends'?activeElement:nonActiveElement}>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>
     Messages
     </div>
     </Link>
    <Link href={'/navbare/savedposts'}>
    <div className={pathname==='/savedposts'?activeElement:nonActiveElement}>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
     </svg>
     Saved posts
     </div>
    </Link>
   <Link href={'/navbare/notifications'}>
   <div  className={pathname==='/notifications'?activeElement:nonActiveElement} >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
     </svg>
     Notifications
    {
    notification && notification.length>0 &&  <span className='absolute flex items-center justify-center left-2 top-2 bg-red-600 text-white rounded-full p-2 w-5 h-5' >{ notification.length}</span>
    }
     </div>
   </Link>
   
   <div className={nonActiveElement} onClick={logOut}>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
     </svg>
     Logout
     </div>
   
    </div>
    
 
    </Card>
     </div>

 
  )
}
