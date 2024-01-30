
import { FcGoogle } from "react-icons/fc";
import { FaFacebook,FaTwitter } from "react-icons/fa";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Login() {
  const supabase=useSupabaseClient();
  const session=useSession();
  const loginWithGoogle=async()=>{
   await supabase.auth.signInWithOAuth({
      provider: 'google',
    }).then(
      result=>{
       if(result){

       }
      }
    )
  
  }
 
  const signInWithFacebook=async()=> {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
    })
  }
  
  return (
   
       <div className=" p-3  bg-white rounded-md shadow-md max-w-md mx-6 sm:mx-auto mt-52">
       
        <h1 className="font-bold text-3xl text-center mb-3">Login</h1>
        <div className="flex flex-col gap-3">
        <button className="flex  items-center justify-center gap-2 bg-gray-100 py-3 px-5 rounded-full grow text-lg hover:bg-gray-200" onClick={loginWithGoogle}>
        <FcGoogle className="text-2xl"/>
        Login with Google
        </button>
        <button className="flex  items-center justify-center gap-2 bg-gray-100 py-3 px-5 rounded-full grow text-lg hover:bg-gray-200" onClick={signInWithFacebook}>
        <FaFacebook className="text-2xl text-blue-700"/>
        Login with Facebook
        </button>
        <button className="flex  items-center justify-center gap-2 bg-gray-100 py-3 px-5 rounded-full grow text-lg hover:bg-gray-200">
        <FaTwitter className="text-2xl text-blue-600"/>
        Login with Twitter
        </button>
        </div>
        
       </div> 
   
  )
}
