import Card from '@/Components/Card'
import Layout from '@/Components/Layout'

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect } from 'react';

export default function Notifications() {
  
  const session=useSession();
  const supabase=useSupabaseClient();
  const fetchLikes=async()=>{
    try {
     await supabase.from('post').select('*,likes!inner(*)').eq('userId',session.user.id).then(
       result=>{
       
       console.log(result.data);
       
        
     
       }
     );
    } catch (error) {
     console.log(error.message);
     
    }
  
  
     }
  useEffect(()=>{
   fetchLikes()
  },[])
  return (
    <Layout>
        <h2 className="font-bold text-3xl mb-3">Notifications</h2>
        <Card>
            <div>
                <div></div>
            </div>
        </Card>
    </Layout>
  )
}
