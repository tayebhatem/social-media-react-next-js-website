import Link from "next/link";
import Avatar from "./Avatar";
import Card from "./Card";
import React, { useState,useContext, useRef,useEffect, useCallback } from 'react';
import ReactTimeAgo from "react-time-ago";
import { UserContext } from "@/Context/UserContext";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Comment from "./Comment";
import { useRouter } from "next/router";
import Image from "next/image";
export default function Post({post,loadPosts}) {
 
    const[dropDawnOpen,setDropDawnOpen]=useState(false);
    const [emptyComment,setEmptyComment]=useState(true);
    const {user}=useContext(UserContext);
    const [avatar,setAvatar]=useState("");
    const[comments,setComments]=useState([]);
    const[likes,setLikes]=useState([]);
    const session=useSession()
    const router=useRouter();
    const { id } = router.query;
    const supabase=useSupabaseClient();
    const comment=useRef('');
   
    const fetchComments=async()=>{
      try {
       await supabase.from('comment').select('*,profiles!inner(*)').eq('postId',post.postId).order("created_at").then(
         result=>{

          
           setComments(result.data);
         }
       );
      } catch (error) {
       console.log(error.message);
       
      }
   
       }
       const fetchLikes=async()=>{
        try {
         await supabase.from('likes').select('*').eq('postId',post.postId).then(
           result=>{
           
           
            setLikes(result.data);
            
         
           }
         );
        } catch (error) {
         console.log(error.message);
         
        }
      
      
         }
  
    const deletePsot=async()=>{
      try{
      supabase.
      from('post').delete().eq('postId',post.postId).then(
        result=>{
          if (!result.error) {
            loadPosts();
         
          }else{
            console.log(result.error);
          }
        }
      );
     } catch (error) {
      
     }
    }
    const addComment=async()=>{
      const commentContext=comment.current.value;
    
      
        await supabase.
         from('comment').insert({context:commentContext,userId:session.user.id,postId:post.postId}).then(
           result=>{
             if (!result.error) {
              fetchComments();
              comment.current.value = '';
             
             }else{
               console.log(result.error);
             }
           }
         );
        
      
    }
    const isLiked=!!likes.find(like=>like.userId===user.id);
    const addLike= ()=>{
     if(!isLiked){
      try {
         supabase.
        from('likes').insert({userId:user.id,postId:post.postId}).then(
          result=>{
            if (!result.error) {
            fetchLikes();
           
            }else{
              console.log(result.error);
            }
          }
        );
       } catch (error) {
        
       }
     }else{
      try {
        supabase.
       from('likes').delete().eq('postId',post.postId).eq('userId',user.id).then(
         result=>{
           if (!result.error) {
           fetchLikes();
          
           }else{
             console.log(result.error);
           }
         }
       );
      } catch (error) {
       
      }
     }

    }
    
    const getAvatar=async()=>{
      await supabase.from('profiles').select('*').eq('id',session.user.id).single().then(
        result=>{
          setAvatar(result.data.avatar);
        
        }
       );
    }
    useEffect(()=>{
      const fetchLikes=async()=>{
        try {
         await supabase.from('likes').select('*').eq('postId',post.postId).then(
           result=>{
           
           
            setLikes(result.data);
            
         
           }
         );
        } catch (error) {
         console.log(error.message);
         
        }
      
      
         }

         
         const fetchComments=async()=>{
          try {
           await supabase.from('comment').select('*,profiles!inner(*)').eq('postId',post.postId).order("created_at").then(
             result=>{
    
              
               setComments(result.data);
             }
           );
          } catch (error) {
           console.log(error.message);
           
          }
       
           }
          
      fetchLikes();
      fetchComments();
      const getAvatar=async()=>{
      await supabase.from('profiles').select('*').eq('id',session.user.id).single().then(
        result=>{
          setAvatar(result.data.avatar);
        
        }
       );
    }
     
      if(session.user.id!==id){

        getAvatar();
      }else{
        setAvatar(user.avatar);
      }
      
    },[session.user.id, id, supabase, post.postId, user.avatar])
   
    const inputHandler=(e)=>{
      const text=e.target.value;
      if(text==''){
        setEmptyComment(true);
      }else{
        setEmptyComment(false);
      }
      }
      
  return (
    <Card>
        <div className="flex items-start justify-between">

           <div className="flex gap-2">
           <Link href={'/profile/'+post.userId+'/posts'}>
           <Avatar url={post.profiles.avatar}/>
           </Link>
           
           
          
          <div>
          <p>
          <Link href={'/profile/'+post.userId+'/posts'}>
          <span className="font-semibold mr-1">{post.profiles.name}</span>
          </Link>
          
          <a className="dark:text-darkcolorText"> shared a post</a>
           </p>
            <p className="text-gray-500 text-sm dark:text-darkcolorText">
            <ReactTimeAgo date={post.created_at} locale="en-US"/>
            </p>
          </div>
           </div>

         <div className="relative">
         <button onClick={()=>{setDropDawnOpen(!dropDawnOpen)}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
        </svg>
        </button>
        
         <>
            {
                dropDawnOpen &&  
                <div className="flex flex-col gap-3 w-52 absolute right-0 z-10 bg-white shadow-md shadow-gray-300 rounded-md p-3 border dark:bg-darkcolorNav dark:shadow-none dark:border-none">
                 <a href="" className="flex gap-2  hover:bg-primary hover:text-white hover:shadow-md hover:rounded-md hover:scale-110 transition-all py-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                 </svg>
                 Save post</a>
                
                 <a href="" className="flex gap-2  hover:bg-primary hover:text-white hover:shadow-md hover:rounded-md hover:scale-110 transition-all py-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                 </svg>
                 Hide post</a>
                 {
                  post.userId===user.id?<button className="flex gap-2  hover:bg-primary hover:text-white hover:shadow-md hover:rounded-md hover:scale-110 transition-all py-2" onClick={deletePsot}>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                 </svg>
                 Delete post
                 </button>:
                 <a href="" className="flex gap-2  hover:bg-primary hover:text-white hover:shadow-md hover:rounded-md hover:scale-110 transition-all py-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                 </svg>

                 Report post</a>
                 }
                
                </div>
            }
         </>
     
         </div>
        </div>

        <div>
            <p className="py-3">{post.context}</p>
          <div className={post.photos.length>1?"grid grid-cols-2 gap-3 py-3":"flex gap-3 py-3"}>
          {
            post.photos.map((url,index)=>(
              <>
              <div key={index} className={post.photos.length>1?"relative flex items-center justify-center rounded-md h-48 overflow-hidden":"relative flex items-center justify-center rounded-md h-full overflow-hidden"}>
           <Image alt="photo" width={1000} height={1000} className="grow" src={url}/>
           </div>
              </>
            ))
          }
          </div>
        </div>

        <div className="mt-4 flex gap-2 border-b pb-3 dark:border-b-darkcolorInput">
            <button className="flex gap-2" onClick={addLike} >
            <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked?"red":"none"} viewBox="0 0 24 24" strokeWidth={isLiked?0:1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            {likes.length}
            </button>
            <button className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
             {comments.length}
            </button>

            <button className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            0
            </button>
        </div>
        <div className="flex flex-col gap-3 py-3 max-h-40 overflow-auto scrollbar scrollbar-thumb-gray-300 dark:scrollbar-thumb-darkcolorComment">
        {
          comments.map(comment=>(
           <>
           
           <Comment key={comment.commentId} comment={comment}/>
           </>
          ))
        }
        </div>
        <div className="flex gap-2 mt-4 items-center">
        {<Avatar url={avatar} size={'sm'}/>}
         <div className="grow p-3 flex gap-2 bg-gray-100 rounded-full dark:bg-darkcolorInput">
         <input className="grow resize-none  outline-none bg-transparent" ref={comment}  placeholder="Leave a comment..." onChange={inputHandler} />
         <button className="text-gray-500" >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
         </button>
         <button className={emptyComment?"text-gray-500 ":"text-primary dark:text-white"} disabled={emptyComment && "true"} onClick={addComment}>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
</svg>

         </button>

         </div>  
        </div>
    </Card>
  )
}
