import Avatar from '@/Components/Avatar';
import Card from '@/Components/Card'
import Layout from '@/Components/Layout'
import ReactTimeAgo from "react-time-ago";

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect,useState } from 'react';
import Post from '@/Components/Post';

export default function Notifications() {
  const supabase=useSupabaseClient();
  const session=useSession();
  const [notifications,setNotifications]=useState([]);
  const [post,setPost]=useState(null);
  const [visible,setVisible]=useState(false);

  const showPost=(id,idPost)=>{
  setVisible(true);
  updateNotification(id);
  
  fetchPost(idPost);
  }
  const fetchPost=(postId)=>{
    try {
      supabase.from('post').select('*,profiles!inner(*)').eq('userId',session.user.id).eq('postId',postId).single().then(
        result=>{
          
          setPost(result.data);

        }
      )
    } catch (error) {
      
    }
  }  
  
  const updateNotification=(id)=>{
    try {
      supabase.from('notifications').update({'status':'seen'}).eq('id',id)
      .then(
        result => {
          
      fetchNotifications();
      })
    } catch (error) {
      
    }
  }  
  const fetchNotifications=()=>{
    try {
      supabase.from('notifications').select('*,post!inner(*),profiles!inner(*)').eq('post.userId',session.user.id).then(
        result=>{
          console.log(result.data);
          setNotifications(result.data)
        }
      )
    } catch (error) {
      
    }
  } 
    useEffect(()=>{
        
      fetchNotifications();

  },[])
 
  return (
   <>
   {visible && post &&
   <div className='flex flex-col gap-2 fixed z-50 top-2/3 left-2/4 -translate-y-2/3 -translate-x-2/4 max-w-full bg-white p-5 rounded-md shadow-md '>
   <div className='self-end cursor-pointer' onClick={()=>{setVisible(false)}}>
  
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                 </svg>
   </div>
   <Post post={post}/>
   </div>
   }
     <Layout>
        <h2 className="font-bold text-3xl mb-3">Notifications</h2>
        <Card>
        
            <div className='flex flex-col gap-1'>
            {
                notifications.map((notification)=>(
                 <>
                 <div className={notification.status=='seen'?'flex items-center gap-2 p-3 rounded-md cursor-pointer':'flex items-center gap-2 p-3 rounded-md cursor-pointer  bg-gray-100'} onClick={()=>{showPost(notification.id,notification.post.postId)}}>
                  
                  <Avatar url={notification.profiles.avatar}/>
                  <div>
                  <div className='flex items-center gap-2'>
                  <div className='text-lg font-bold'>
                    {notification.profiles.name}
                  </div>

                  <div>
                    {notification.action} in your post
                  </div>
                  </div>
                  <div className='text-gray-500'>
                  <ReactTimeAgo date={notification.created_at} locale="en-US"/>
                  </div>
                  </div>

                </div>
                 </>
                ))
               }
            </div>
        </Card>
    </Layout>
   </>
  )
}
