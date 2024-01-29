import Layout from "@/Components/Layout";
import Post from "@/Components/Post";

export default function SavePosts() {
  
    const posts=[
        {
          profileImg:"https://scontent.falg5-2.fna.fbcdn.net/v/t1.6435-1/80728686_2480662072198805_2359587610025787392_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeGLcg5Zb1dwDn9GUtH06KHTLj3zp0psFyMuPfOnSmwXI_mOZOy2bhVJTnWDjfsjcDqssHx5qSqQjZ7_zgjNy9x0&_nc_ohc=g0DhCCTJIYsAX-mK93S&_nc_ht=scontent.falg5-2.fna&oh=00_AfBU4-LsBYb3D5lz-dlLvb6yRls22pCboX0vvYbtst8tWg&oe=65D5B7E1",
          fullName:"Hamia OC",
          context:"Excepteur est est minim aute commodo fugiat eu ut anim tempor sunt labore aliqua. Exercitation proident elit sunt est nisi enim duis id consequat.",
          image:""
    
        },
        {
          profileImg:"https://scontent.falg5-1.fna.fbcdn.net/v/t39.30808-1/420129320_3493951077532819_7627199063434980081_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGQ6_dS63Ky7SHoBGEOoH7_QZ8zFScW0f9BnzMVJxbR_5_zQiN79O4CGfkwD2XfvNEczR6A_Fcol1hS3eU4giVl&_nc_ohc=OcPSaMAAn94AX8m3big&_nc_ht=scontent.falg5-1.fna&oh=00_AfAPdY6tjGYqs1KpSpiH4fOUiw7i-wWD85im5XQeHa_NKw&oe=65B3C0E7",
          fullName:"Brooklee",
          context:"",
          image:"https://img.freepik.com/photos-gratuite/beau-tir-tente-orange-montagne-rocheuse-entouree-arbres-au-coucher-du-soleil_181624-3908.jpg?w=740&t=st=1705845452~exp=1705846052~hmac=45b4c6d15119d59e274c84a61c5015f014d2df840119c9f16e7269a3d347e1ee"
    
        }
      ];
  return (
    <Layout>
        <h2 className="font-bold text-3xl mb-3">Saved posts</h2>
      
    </Layout>
  )
}
