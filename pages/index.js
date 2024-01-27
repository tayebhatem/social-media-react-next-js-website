import Layout from "@/Components/Layout";
import Navigation from "@/Components/Navigation";
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
    
    fetchPosts();
  },[])
   
  

  if (!session) {
    return <Login/>
  }
  return (

<Layout>

     <PostForm loadPosts={fetchPosts} />
    {
      posts.map(post=>(
       <>
       <Post key={post.postId} id={post.postId} context={post.context} photos={post.photos} profiles={post.profiles} date={post.created_at}/>
  
       </>
      ))
    }
   
   </Layout>
 

  );
}
