import Card from '@/Components/Card'
import Layout from '@/Components/Layout'

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect } from 'react';

export default function Notifications() {
  
 
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
