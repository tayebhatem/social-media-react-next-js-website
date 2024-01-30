import Layout from "@/Components/Layout";

import Post from "@/Components/Post";
import PostForm from "@/Components/PostForm";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Login from "./login";
import { useEffect, useState } from "react";


export default function Home() {
  const [posts,setPosts]=useState([]);
  
  const session=useSession();
  const supabase=useSupabaseClient();
  const fetchPosts=async()=>{
    try {
     await supabase.from('post').select('*,profiles!inner(*)').order("created_at",{ ascending: false }).then(
       result=>{
        
         setPosts(result.data);
       }
     );
    } catch (error) {
     console.log(error.message);
     
    }
 
     }
  useEffect(()=>{
    
    const fetchPosts=async()=>{
      
      try {
       await supabase.from('post').select('*,profiles!inner(*)').order("created_at",{ ascending: false }).then(
         result=>{
          
           setPosts(result.data);
         }
       );
      } catch (error) {
       console.log(error.message);
       
      }
   
       }
    fetchPosts();
  })
   
  
  const updateOnline=async()=>{
    try{
      await supabase.
       from('profiles').update({online:true}).eq('id',session.user.id);
      } catch (error) {
       console.log(error.message);
      }
  }
  if (!session) {
    return <Login/>
  }else{
    updateOnline();
  }
  return (

<Layout>
     
     <PostForm loadPosts={fetchPosts} />
    {
      posts && posts.map(post=>(
       <>
       <Post key={post.postId} post={post} loadPosts={fetchPosts}/>
  
       </>
      ))
    }
   
   </Layout>
 

  );
}
