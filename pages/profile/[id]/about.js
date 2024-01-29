import Card from "@/Components/Card";
import Profile from "@/Components/Profile";
import { UserContext } from "@/Context/UserContext";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";


export default function About() {
  const[editBoi,setEditBoi]=useState(false);
  const boiContext=useRef('');
  const[editName,setEditName]=useState(false);
  const nameContext=useRef('');
  const [user,setUser]=useState({});
  const router=useRouter();
  const { id } = router.query;
  const supabase=useSupabaseClient();
 
  const session=useSession();
  const updateName=async()=>{
    const userName=nameContext.current.textContent;
  
    if(userName!=''){
      try{
        await supabase.
         from('profiles').update({name:userName}).eq('id',session.user.id).then(
           result=>{
             if (!result.error) {
              
             // fetchUser();
              setEditName(false);
             
             }else{
               console.log(result.error);
             }
           }
         );
        } catch (error) {
         
        }
    }
   
    
  }
  
  const updateBoi=async()=>{
    const userBoi=boiContext.current.textContent;
    
   if(userBoi!=''){
    try{
      await supabase.
       from('profiles').update({boi:userBoi}).eq('id',session.user.id).then(
         result=>{
           if (!result.error) {
            console.log(result);
            //fetchUser();
            setEditBoi(false);
           }else{
             console.log(result.error);
           }
         }
       );
      } catch (error) {
       
      }
   
   }
    
  }
  useEffect(()=>{
const fetchUser=async()=>{

  try {
 
    await supabase.from('profiles').select('*').eq('id',session.user.id).single().then(
      result=>{
        setUser(result.data);
      }
     );
   
 
   
  } catch (error) {
   console.log(error.message)
  }
   }
   fetchUser();
  },[])
  return (
    <Profile>
        <Card>
            <h2 className="font-bold text-2xl mb-2">Edit profile</h2>
            <div className="flex flex-col gap-3 ">
           <div>
           <div className="font-medium mb-1">Name</div>
           <div className="flex  items-center">
           <div className="outline-none border p-2 rounded-md  w-9/12 bg-gray-100"  contentEditable={editName} ref={nameContext} >
           {user && user.name}
           </div>
          {
           session && session.user.id===id && (
            editName?<button className="grow text-primary " onClick={updateName} >Save</button>:
          <button className=" grow text-primary " onClick={()=>{setEditName(true)}}>Edit</button>
           )
          
          }
           </div>
           </div>

            <div>
            <div className="text-lg font-medium">Boi</div>
            <div className="flex items-center">
            <p contentEditable={editBoi} className="outline-none border p-2 rounded-md w-9/12 h-28 bg-gray-100" ref={boiContext} >
                {user && user.boi}
                </p>
                {session && session.user.id===id && (editBoi?<button className="grow text-primary " onClick={updateBoi}>Save</button>:
          <button className=" grow text-primary " onClick={()=>{setEditBoi(true)}}>Edit</button>)
          }
            </div>
            </div>

            
            </div>
        </Card>
    </Profile>
  )
}
