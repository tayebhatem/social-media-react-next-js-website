import Avatar from "./Avatar";
import Comment from "./Comment";
import { UserContext } from "@/Context/UserContext";
import { useContext,useEffect,useState,useRef } from "react";

export default function CommentBox({comments,fetchComments}) {
    const [emptyComment,setEmptyComment]=useState(true);
    const {user}=useContext(UserContext);
    const comment=useRef('');
    const inputHandler=(e)=>{
        const text=e.target.value;
        if(text==''){
          setEmptyComment(true);
        }else{
          setEmptyComment(false);
        }
        }
  
    const addComment=async()=>{
        const commentContext=comment.current.value;
      
        
          await supabase.
           from('comment').insert({context:commentContext,userId:user.id,postId:post.postId}).then(
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
      useEffect(()=>{
     
       
        fetchComments();
        
        
      },[])
  return (
    <div className="bg-white absolute">
     <div className="flex flex-col gap-3 py-3 max-h-40 overflow-auto scrollbar scrollbar-thumb-gray-300">
        {
          comments.map(comment=>(
           <>
           
           <Comment key={comment.commentId} comment={comment}/>
           </>
          ))
        }
        
        </div>
        <div className="flex gap-2 mt-4 items-center">
        <Avatar url={user && user.avatar} size={'sm'}/>
         <div className="grow p-3 flex gap-2 bg-gray-100 rounded-full">
         <input className="grow resize-none  outline-none bg-transparent" ref={comment}  placeholder="Leave a comment..." onChange={inputHandler} />
         <button className="text-gray-500" >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
         </button>
         <button className={emptyComment?"text-gray-500 ":"text-primary"} disabled={emptyComment && "true"} onClick={addComment}>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
</svg>

         </button>

         </div>  
        </div>
    </div>
  )
}
