import React from 'react'
import Layout from './Layout'
import Card from './Card'
import Avatar from './Avatar';

export default function MessageBox({setShowMessages}) {
    const profileimg="https://scontent.falg5-2.fna.fbcdn.net/v/t39.30808-6/325350524_700610724796391_8680551698288473632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFoYW-mF02dsaQgYaXqkaXSQ5b59qlqS-dDlvn2qWpL52kJaiwHkj-huMm7e2bMHVS-leXfaWdMs759jzsi0syi&_nc_ohc=TQ0ONJqC6XEAX-Syr5i&_nc_ht=scontent.falg5-2.fna&oh=00_AfDQPLohqIChCu319erYqWCvl2RFmHfg4B8a7W4TeRh16g&oe=65B28D0B";
    const fullname="Tayeb Hatem";
  return (
   
        <Card>
            <div>
                <div className='flex justify-between pb-3'>
                 <div className='flex items-center gap-3 px-2'>
                 <Avatar size={'md'} url={profileimg}/>
                 <div className='font-bold text-xl'>{fullname}</div>
                 </div>
                 <button className='' onClick={()=>{setShowMessages(false)}}>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

                 </button>
                </div>
               <div>
               <div className='overflow-y-auto h-96 p-3'>

<div className='flex flex-col justify-end  gap-2'>


</div>

<div>
<div className='bg-primary text-white rounded-2xl p-2'>
  Aliqua ea amet dolore occaecat deserunt ex eiusmod enim consequat commodo quis enim enim aute.
</div>
<div className='text-sm text-gray-500 text-right'>
    10:09PM
</div>
</div>

<div>
<div className='bg-gray-300 rounded-2xl p-2'>
    Laboris voluptate laboris do aliquip non enim cupidatat culpa non ut irure consequat
</div>
<div className='text-sm text-gray-500 text-right'>
    10:01PM
</div>
</div>

<div>
<div className='bg-primary text-white rounded-2xl p-2'>
  Aliqua ea amet dolore occaecat deserunt ex eiusmod enim consequat commodo quis enim enim aute.
</div>
<div className='text-sm text-gray-500 text-right'>
    10:09PM
</div>
</div>






<div>
<div className='bg-gray-300 rounded-2xl p-2'>
    Laboris voluptate laboris do aliquip non enim cupidatat culpa non ut irure consequat
</div>
<div className='text-sm text-gray-500 text-right'>
    10:01PM
</div>
</div>

<div>
<div className='bg-primary text-white rounded-2xl p-2'>
  Aliqua ea amet dolore occaecat deserunt ex eiusmod enim consequat commodo quis enim enim aute.
</div>
<div className='text-sm text-gray-500 text-right'>
    10:09PM
</div>
</div>

</div>
               </div>
                <div>
                <div className="grow p-3 my-2 flex gap-2 bg-gray-100 rounded-full">
         <input className="grow resize-none  outline-none bg-transparent"  placeholder="Message..." />
        
         <button className="text-gray-500">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
</svg>

         </button>

         </div>  
                </div>
            </div>
        </Card>

  )
}
