import PostForm from "@/Components/PostForm";
import Profile from "@/Components/Profile";
import Post from "@/Components/Post";
import { useContext, useEffect,useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import { useRouter } from "next/router";
export default function Posts() {
  const [myPosts,setMyPosts]=useState([]);
  const supabase=useSupabaseClient();
 const session=useSession();
  
  const router=useRouter();
  const { id } = router.query;
  
  const fetchPosts=async()=>{
    try {
   if (session.user.id===id) {
    await supabase.from('post').select('*,profiles!inner(*)').eq('userId',session.user.id).order("created_at",{ ascending: false }).then(
      result=>{
       
        setMyPosts(result.data);

      }
    );
   } else {
    await supabase.from('post').select('*,profiles!inner(*)').eq('userId',id).order("created_at",{ ascending: false }).then(
      result=>{
       
        setMyPosts(result.data);

      }
      );
   }
    } catch (error) {
     console.log(error.message);
     
    }
 
     }
  useEffect(()=>{
    fetchPosts();
    
  })
  

  return (
    <Profile >
       
           {session && session.user.id===id && <PostForm loadPosts={fetchPosts}/>}
          {
           myPosts && myPosts.map(post=>(
              <>
              <Post key={post.postId} post={post}/>
              </>
            ))

          }
     
    </Profile>
  )
}
