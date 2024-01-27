import ReactTimeAgo from "react-time-ago";
import Avatar from "./Avatar";


export default function Comment({comment}) {
  return (
    <div  className="flex flex-col gap-3">
    <div className="flex gap-2 items-center">
    <Avatar url={comment.profiles.avatar} size={'sm'}/>
   <div className=" bg-gray-200 rounded-3xl py-1 px-4 dark:bg-darkcolorComment">
   <div className="flex gap-2">
   <div className="text-md font-bold">{comment.profiles.name}</div>
   <div className="text-gray-500 dark:text-darkcolorText">{ <ReactTimeAgo timeStyle={'twitter'} date={comment.created_at} locale="en-US"/>}</div>
   </div>
     <div className="dark:text-[#aaa]">{comment.context}</div>
   </div>
    </div>
    
     </div>
  )
}
