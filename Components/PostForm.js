import Avatar from "./Avatar";
import Card from "./Card";


export default function PostForm() {
  const url="https://scontent.falg5-2.fna.fbcdn.net/v/t39.30808-6/325350524_700610724796391_8680551698288473632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFoYW-mF02dsaQgYaXqkaXSQ5b59qlqS-dDlvn2qWpL52kJaiwHkj-huMm7e2bMHVS-leXfaWdMs759jzsi0syi&_nc_ohc=TQ0ONJqC6XEAX-Syr5i&_nc_ht=scontent.falg5-2.fna&oh=00_AfDQPLohqIChCu319erYqWCvl2RFmHfg4B8a7W4TeRh16g&oe=65B28D0B";
  return (
    <Card> 
        <div className="flex gap-3">
         <Avatar url={url}/>
       
            <input className="grow resize-none outline-none outline-1 p-3 bg-gray-50 rounded-full" placeholder="What's on your mind ?"/>
            
        </div>
        <div className="flex  items-center justify-between mt-4 border-t pt-3">

           <div className="flex gap-3 items-center">
           <button  className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Montion
            </button>
            <button className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Location</button>
           
            <button className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
            Photo</button>
           </div>
            <button className="bg-primary text-white px-6 py-1 rounded-md shadow-md">Share</button>
        </div>
    </Card>
  )
}
