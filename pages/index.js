import Layout from "@/Components/Layout";
import Navigation from "@/Components/Navigation";
import Post from "@/Components/Post";
import PostForm from "@/Components/PostForm";

export default function Home() {
  return (
   <Layout>
    
     <PostForm/>
    <Post/>
    
   </Layout>
  );
}
