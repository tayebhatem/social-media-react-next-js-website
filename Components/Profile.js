import Avatar from "@/Components/Avatar";
import Card from "@/Components/Card";
import Layout from "@/Components/Layout";
import { UserContext } from "@/Context/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { CiCamera } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import ReactTimeAgo from "react-time-ago";
import Image from "next/image";
export default function Profile({children}) {
 
  const router=useRouter();
  const { id } = router.query;
  const {pathname}=router;
 
  const activeElement="flex gap-2 border-b-4 pb-3 border-primary text-primary";
  const nonActiveElement="flex gap-2 dark:text-darkcolorText";
 const isPosts=pathname.includes('/profile/[id]/posts');
 const isFriends=pathname.includes('/profile/[id]/friends');
 const isPhotos=pathname.includes('/profile/[id]/photos');
 const isAbout=pathname.includes('/profile/[id]/about');

 const supabase=useSupabaseClient();
 const [user,setUser]=useState({});
 
 const [isLoading,setIsLoading]=useState(false);
 const session=useSession();

 const getUrl=(fileName,path)=>{
  const { data, error } =  supabase
          .storage
          .from('images')
          .getPublicUrl(path+fileName) ;
          if (error) {
            console.error('Error fetching image URL:', error.message);
           
          }else{
            if(path==='profiles/'){
              updateProfilePicture(data.publicUrl);
            }else{
              updateCover(data.publicUrl);
            }
            
            
          
          
          }
 }

 const uplaodPhoto=(e)=>{
 setIsLoading(true);
  const file=e.target.files[0];
  const uuid = uuidv4();
  const fileName = uuid + '.' + file.name.split('.').pop();
  supabase.storage.from('images')
  .upload('profiles/'+fileName,file).then(
    result=>{
      if(!result.error){
        getUrl(fileName,'profiles/');
        
        setIsLoading(false);
      }else{
        console.log(error);
      }
    }
  );
    
  
}

const uplaodCover=(e)=>{
//  setIsLoading(true);
   const file=e.target.files[0];
   const uuid = uuidv4();
   const fileName = uuid + '.' + file.name.split('.').pop();
   supabase.storage.from('images')
   .upload('covers/'+fileName,file).then(
     result=>{
       if(!result.error){
         getUrl(fileName,'covers/');
     
        // setIsLoading(false);
       }else{
         console.log(error);
       }
     }
   );
     
   
 }

const updateProfilePicture=async(url)=>{
  try{
   await supabase.
    from('profiles').update({avatar:url}).eq('id',id).then(
      result=>{
        if (!result.error) {
         
         fetchUser();
        }else{
          console.log(result.error);
        }
      }
    );
   } catch (error) {
    
   }
}


const updateCover=async(url)=>{
  try{
    await supabase.
    from('profiles').update({cover:url}).eq('id',id).then(
      result=>{
        if (!result.error) {
         
         fetchUser();
        }else{
          console.log(result.error);
        }
      }
    );
   } catch (error) {
    
   }
}

const fetchUser=async()=>{

  try {
   if (session.user.id===id) {
    await supabase.from('profiles').select('*').eq('id',session.user.id).single().then(
      result=>{
        setUser(result.data);
      }
     );
   } else {
    await supabase.from('profiles').select('*').eq('id',id).single().then(
      result=>{
        setUser(result.data);
      }
     );
   }
 
   
  } catch (error) {
   console.log(error.message)
  }
   }

useEffect(()=>{
 
  fetchUser();
  
})
  return (
    <UserContext.Provider value={{user}}>
    <Layout>
    
        <Card noPadding={true}>
        <div className=" ">
       <div className="relative bg-gray-200 h-48 dark:bg-darkcolorNav">
       {
       session && session.user.id===id && <label className="cursor-pointer">
       <div className="absolute right-3 top-2 flex items-center gap-2 px-2 bg-white p-1 rounded-md shadow-lg cursor-pointer dark:bg-darkcolorCard">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
       <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
       </svg>
       Change cover image
       </div>
       <input type="file" className="hidden" multiple onChange={uplaodCover}/>
       </label>
       }

       {user!==null && user.cover?<div className="h-48 overflow-hidden flex justify-center items-center ">
                <Image alt="photo" width={1000} height={1000}  src={user!==null && user.cover}/>
            </div>:
            <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-2/4 text-6xl">
       <CiCamera/>
       </div>}
            <div className="absolute left-1/2 top-2/3 flex flex-col justify-center items-center -translate-x-1/2 ">
               <div className="relative border-2 border-white w-fit rounded-full bg-white  dark:bg-darkcolorInput  dark:border-darkcolorInput">
              <label className="cursor-pointer">
              {user!==null && <div className={isLoading && "animate-pulse"}><Avatar size={'lg'} url={user!==null && user.avatar}/></div>}
             {
              session && session.user.id===id && <>
              <input type="file" className="hidden" multiple onChange={uplaodPhoto}/>
              <div className="absolute bottom-0 right-1 bg-white rounded-full p-1 shadow-md dark:bg-darkcolorInput">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>
               </div>
              </>
             }

              </label>
             
               

               </div>

          
                
            <div className="font-bold text-xl px-2">
                {user && user.name}
                
            </div>
            <p className="text-center">
                {user && user.boi}
                
            </p>
            
            {
              user && user.online? <div className="flex items-center gap-2 text-center text-gray-500">
            online
            <div className="animate-pulse">
            <FaCircle className="text-green-500 w-3"/>
            </div>
            </div>:
            <div className="flex items-center gap-2 text-center text-gray-500">
            online   {user.offlinetime &&  <ReactTimeAgo date={user.offlinetime} locale="en-US"/>}
           
            </div>
            }
           
           
            
        </div>
        
       </div>
        
       <div className="flex gap-4 mt-36 pt-2 border-t text-gray-500 justify-center dark:border-t-darkcolorInput">
       
       <Link href={'/profile/'+id+'/posts'}>
       <button className={isPosts? activeElement:nonActiveElement}>
       
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
      </svg>
      Posts
             </button>
       </Link>
       <Link href={'/profile/'+id+'/friends'}>
       <button className={isFriends? activeElement:nonActiveElement}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

Friends
       </button>
       </Link>
      <Link href={'/profile/'+id+'/photos'}>
      <button className={isPhotos? activeElement:nonActiveElement}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

Photos
       </button>
      </Link>

     {
      session && session.user.id===id &&  <Link href={'/profile/'+id+'/about'}>
      <button className={isAbout? activeElement:nonActiveElement}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

Edit profile
       </button>
      </Link>
     }
       </div>
        </div>
        </Card>
        
        {children}
       
    </Layout>
    </UserContext.Provider>
  )
}
