import { useEffect, useRef, useContext, useState } from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { UserContext } from "@/Context/UserContext";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
export default function PostForm({loadPosts}) {
  const supabase=useSupabaseClient();
  const session=useSession();
  const {user}=useContext(UserContext);
  const context=useRef('');
  const [urls,setUrls]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  
  const remove = (index) => {
    const updatedUrls = [...urls.slice(0, index), ...urls.slice(index + 1)];
    setUrls(updatedUrls);
  };
  const getUrl=(fileName)=>{
    const { data, error } =  supabase
            .storage
            .from('images')
            .getPublicUrl('posts/'+fileName) ;
            if (error) {
              console.error('Error fetching image URL:', error.message);
             
            }else{
            
            
              setUrls([...urls,data.publicUrl]);
            }
   }
  const uplaodPhoto=(e)=>{
    setIsLoading(true);
    const files=e.target.files;

    for(const file of files)  {
      let uuid = uuidv4();
      let fileName = uuid + '.' + file.name.split('.').pop();

    supabase.storage.from('images')
    .upload('posts/'+fileName,file).then(
      result=>{
        if(!result.error){
          getUrl(fileName);
          setIsLoading(false);
        }else{
          console.log(error);
        }
      }
    );
      
    };
  }
  const addPost=async()=>{
    const postContext=context.current.value;
   if (postContext!='') {
    try {
      await supabase.
       from('post').insert({context:postContext,userId:session.user.id,photos:urls}).then(
         result=>{
           if (!result.error) {
             loadPosts();
             context.current.value = '';
             setUrls([]);
           }else{
             console.log(result.error)
           }
         }
       );
      
       
       
     } catch (error) {
       console.log('erorr is : '+error.message);
     }
   }else{
   console.log('empty');
   }
  }
  
  return (
    <Card> 
        <div className="flex gap-3">
         <Avatar url={user!==null && user.avatar}/>
       
            <input className="grow resize-none outline-none outline-1 p-3 bg-gray-50 rounded-full dark:bg-darkcolorInput" placeholder="What's on your mind?" ref={context}/>
            
        </div>
       {
        isLoading?<div class="flex-col gap-4 w-full flex items-center justify-center py-3">
  <div class="w-12 h-12 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
   
  </div>
</div>: <div className={urls.length>1?"grid grid-cols-2 gap-3 py-3":"flex gap-3 py-3"}>
          {
           
             urls.map((url,index)=>(
              <>
              <div className={urls.length>1?"relative flex items-center justify-center rounded-md h-48 overflow-hidden":"relative flex items-center justify-center rounded-md h-full overflow-hidden"} onClick={()=>{remove(index)}}>
              <div className="absolute text-white  top-2 right-2 text cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              </div>
              <Image alt="photo" width={1000} height={1000} key={index} src={url}/>
              </div>
              </>
             ))
           
          }
        </div>
       }
        <div className="flex  items-center justify-between mt-4 border-t pt-3 dark:border-t-darkcolorInput dark:text-darkcolorText">

           <div className="flex gap-3 items-center">
           <button  className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
           <span className="hidden sm:inline"> Montion</span>
            </button>
            <button className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="hidden sm:inline">Location</span>
            </button>
           
            <label className="flex gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        <span className="hidden sm:inline"> Photo</span>
            <input type="file" className="hidden" multiple onChange={uplaodPhoto}/>
            </label>
           </div>
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md shadow-md" onClick={addPost}>
            <span className="hidden sm:block">Share </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
</svg>
            </button>
        </div>
    </Card>
  )
}
