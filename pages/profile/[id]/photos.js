import Card from "@/Components/Card";
import Profile from "@/Components/Profile";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
export default function Photos() {
  const router=useRouter();
  const { id } = router.query;
  const [images,setImages]=useState(null);
  const supabase=useSupabaseClient();
  
  useEffect(()=>{
    const fetchImages=async()=>{
      try {
  
      await supabase.from('post').select('photos').eq('userId',id).order("created_at",{ ascending: false }).then(
        result=>{
          
           
         result.data && setImages(result.data);
  
        }
      );
     
      } catch (error) {
       console.log(error.message);
       
      }
   
       }
    fetchImages();
    
  },[])
  
  return (

    <Profile>
      <div>
        <Card>
        <h2 className="font-bold text-2xl mb-2">Photos</h2>
        {
          images===null && <div className="font-bold text-2xl text-gray-300 text-center my-6">
          No photo uploaded yet
          </div>
        }
             
        <div className="grid grid-cols-2 gap-2 ">

        {
          images && images.map(image=>(
            image.photos.map((url,index)=>(
              <>
            <div className="flex items-center rounded-md  h-52 overflow-hidden"key={index}>
         <Image alt="photo" width={1000} height={1000} src={url}/>  
         </div>
            </>
            ))
          
          ))
        }
        
        </div>
        </Card>
      </div>
    </Profile>
  )
}
