import ReactTimeAgo from "react-time-ago";
import Avatar from "./Avatar";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Comment({comment,loadComments}) {
  const session=useSession()
  const router=useRouter();
  const { id } = router.query;
  const supabase=useSupabaseClient();
 
  const deleteComment=async()=>{
    try{
    supabase.
    from('comment').delete().eq('commentId',comment.commentId).then(
      result=>{
        if (!result.error) {
          loadComments();
       
        }else{
          console.log(result.error);
        }
      }
    );
   } catch (error) {
    
   }
  }

  return (
    <div  className="flex flex-col gap-3">
    <div className="flex gap-2 items-center">
    <Link href={'../profile/'+comment.userId+'/posts'}>
    <Avatar url={comment.profiles.avatar} size={'sm'}/>
    </Link>
   <div className=" bg-gray-200 rounded-3xl py-1 px-4 dark:bg-darkcolorComment">
   <div className="flex gap-2">
   <Link href={'../profile/'+comment.userId+'/posts'}>
   <div className="text-md font-bold">{comment.profiles.name}</div>
   </Link>
   <div className="text-gray-500 dark:text-darkcolorText">{ <ReactTimeAgo timeStyle={'twitter'} date={comment.created_at} locale="en-US"/>}</div>
   </div>
     <div className="dark:text-[#aaa]">{comment.context}</div>
     {
      session && session.user.id===comment.userId && 
      <div className="grow flex flex-row-reverse  gap-2">
   <button className="text-gray-500 text-md font-medium" onClick={deleteComment}>delete</button>
   
   </div>
    }
    
   </div>
  
    </div>
    
     </div>
  )
}
