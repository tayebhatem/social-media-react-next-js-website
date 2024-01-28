import Card from "@/Components/Card";
import Profile from "@/Components/Profile";
import Friend from "@/Components/Friend";


export default function Friends() {
    const friends=[
        {
          profileImg:"https://scontent.falg5-2.fna.fbcdn.net/v/t1.6435-1/80728686_2480662072198805_2359587610025787392_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeGLcg5Zb1dwDn9GUtH06KHTLj3zp0psFyMuPfOnSmwXI_mOZOy2bhVJTnWDjfsjcDqssHx5qSqQjZ7_zgjNy9x0&_nc_ohc=g0DhCCTJIYsAX-mK93S&_nc_ht=scontent.falg5-2.fna&oh=00_AfBU4-LsBYb3D5lz-dlLvb6yRls22pCboX0vvYbtst8tWg&oe=65D5B7E1",
          fullName:"Hamia OC",
          mutualFriends:5
    
        },
        {
          profileImg:"https://scontent.falg5-1.fna.fbcdn.net/v/t39.30808-1/420129320_3493951077532819_7627199063434980081_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGQ6_dS63Ky7SHoBGEOoH7_QZ8zFScW0f9BnzMVJxbR_5_zQiN79O4CGfkwD2XfvNEczR6A_Fcol1hS3eU4giVl&_nc_ohc=OcPSaMAAn94AX8m3big&_nc_ht=scontent.falg5-1.fna&oh=00_AfAPdY6tjGYqs1KpSpiH4fOUiw7i-wWD85im5XQeHa_NKw&oe=65B3C0E7",
          fullName:"Brooklee",
          mutualFriends:10
    
        },
        {
            profileImg:"https://scontent.falg5-2.fna.fbcdn.net/v/t1.6435-1/80728686_2480662072198805_2359587610025787392_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeGLcg5Zb1dwDn9GUtH06KHTLj3zp0psFyMuPfOnSmwXI_mOZOy2bhVJTnWDjfsjcDqssHx5qSqQjZ7_zgjNy9x0&_nc_ohc=g0DhCCTJIYsAX-mK93S&_nc_ht=scontent.falg5-2.fna&oh=00_AfBU4-LsBYb3D5lz-dlLvb6yRls22pCboX0vvYbtst8tWg&oe=65D5B7E1",
            fullName:"Hamia OC",
            mutualFriends:5
      
          },
          {
            profileImg:"https://scontent.falg5-1.fna.fbcdn.net/v/t39.30808-1/420129320_3493951077532819_7627199063434980081_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGQ6_dS63Ky7SHoBGEOoH7_QZ8zFScW0f9BnzMVJxbR_5_zQiN79O4CGfkwD2XfvNEczR6A_Fcol1hS3eU4giVl&_nc_ohc=OcPSaMAAn94AX8m3big&_nc_ht=scontent.falg5-1.fna&oh=00_AfAPdY6tjGYqs1KpSpiH4fOUiw7i-wWD85im5XQeHa_NKw&oe=65B3C0E7",
            fullName:"Brooklee",
            mutualFriends:10
      
          },
          {
            profileImg:"https://scontent.falg5-2.fna.fbcdn.net/v/t1.6435-1/80728686_2480662072198805_2359587610025787392_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeGLcg5Zb1dwDn9GUtH06KHTLj3zp0psFyMuPfOnSmwXI_mOZOy2bhVJTnWDjfsjcDqssHx5qSqQjZ7_zgjNy9x0&_nc_ohc=g0DhCCTJIYsAX-mK93S&_nc_ht=scontent.falg5-2.fna&oh=00_AfBU4-LsBYb3D5lz-dlLvb6yRls22pCboX0vvYbtst8tWg&oe=65D5B7E1",
            fullName:"Hamia OC",
            mutualFriends:5
      
          },
          {
            profileImg:"https://scontent.falg5-1.fna.fbcdn.net/v/t39.30808-1/420129320_3493951077532819_7627199063434980081_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGQ6_dS63Ky7SHoBGEOoH7_QZ8zFScW0f9BnzMVJxbR_5_zQiN79O4CGfkwD2XfvNEczR6A_Fcol1hS3eU4giVl&_nc_ohc=OcPSaMAAn94AX8m3big&_nc_ht=scontent.falg5-1.fna&oh=00_AfAPdY6tjGYqs1KpSpiH4fOUiw7i-wWD85im5XQeHa_NKw&oe=65B3C0E7",
            fullName:"Brooklee",
            mutualFriends:10
      
          },
          {
            profileImg:"https://scontent.falg5-2.fna.fbcdn.net/v/t1.6435-1/80728686_2480662072198805_2359587610025787392_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeGLcg5Zb1dwDn9GUtH06KHTLj3zp0psFyMuPfOnSmwXI_mOZOy2bhVJTnWDjfsjcDqssHx5qSqQjZ7_zgjNy9x0&_nc_ohc=g0DhCCTJIYsAX-mK93S&_nc_ht=scontent.falg5-2.fna&oh=00_AfBU4-LsBYb3D5lz-dlLvb6yRls22pCboX0vvYbtst8tWg&oe=65D5B7E1",
            fullName:"Hamia OC",
            mutualFriends:5
      
          },
          {
            profileImg:"https://scontent.falg5-1.fna.fbcdn.net/v/t39.30808-1/420129320_3493951077532819_7627199063434980081_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGQ6_dS63Ky7SHoBGEOoH7_QZ8zFScW0f9BnzMVJxbR_5_zQiN79O4CGfkwD2XfvNEczR6A_Fcol1hS3eU4giVl&_nc_ohc=OcPSaMAAn94AX8m3big&_nc_ht=scontent.falg5-1.fna&oh=00_AfAPdY6tjGYqs1KpSpiH4fOUiw7i-wWD85im5XQeHa_NKw&oe=65B3C0E7",
            fullName:"Brooklee",
            mutualFriends:10
      
          },
          {
            profileImg:"https://scontent.falg5-2.fna.fbcdn.net/v/t1.6435-1/80728686_2480662072198805_2359587610025787392_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeGLcg5Zb1dwDn9GUtH06KHTLj3zp0psFyMuPfOnSmwXI_mOZOy2bhVJTnWDjfsjcDqssHx5qSqQjZ7_zgjNy9x0&_nc_ohc=g0DhCCTJIYsAX-mK93S&_nc_ht=scontent.falg5-2.fna&oh=00_AfBU4-LsBYb3D5lz-dlLvb6yRls22pCboX0vvYbtst8tWg&oe=65D5B7E1",
            fullName:"Hamia OC",
            mutualFriends:5
      
          },
          {
            profileImg:"https://scontent.falg5-1.fna.fbcdn.net/v/t39.30808-1/420129320_3493951077532819_7627199063434980081_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGQ6_dS63Ky7SHoBGEOoH7_QZ8zFScW0f9BnzMVJxbR_5_zQiN79O4CGfkwD2XfvNEczR6A_Fcol1hS3eU4giVl&_nc_ohc=OcPSaMAAn94AX8m3big&_nc_ht=scontent.falg5-1.fna&oh=00_AfAPdY6tjGYqs1KpSpiH4fOUiw7i-wWD85im5XQeHa_NKw&oe=65B3C0E7",
            fullName:"Brooklee",
            mutualFriends:10
      
          }
      ];
  return (
    <Profile>
        <Card>
            <div className="flex justify-between">
            <h2 className="font-bold text-2xl mb-2">Friends</h2>
            <div className="flex gap-2 bg-gray-100 px-3 py-2 rounded-full ">
   <span className="text-gray-500">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
   </span>

    <input className="outline-none bg-transparent" placeholder="Search a friend..."/>
    </div>
            </div>
            <div className="grid gap-5 grid-cols-2 mt-4">
               
                    {
                       friends.map(friend=>(
                        <>
                            <Friend profileImg={friend.profileImg} fullName={friend.fullName} mutualFriends={friend.mutualFriends}/>
                        </>
                       ))
                    }
               
            </div>
        </Card>
    </Profile>
  )
}
