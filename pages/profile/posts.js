import PostForm from "@/Components/PostForm";
import Profile from "../profile";
import Post from "@/Components/Post";

export default function posts() {
  const profileimg="https://scontent.falg5-2.fna.fbcdn.net/v/t39.30808-6/325350524_700610724796391_8680551698288473632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFoYW-mF02dsaQgYaXqkaXSQ5b59qlqS-dDlvn2qWpL52kJaiwHkj-huMm7e2bMHVS-leXfaWdMs759jzsi0syi&_nc_ohc=TQ0ONJqC6XEAX-Syr5i&_nc_ht=scontent.falg5-2.fna&oh=00_AfDQPLohqIChCu319erYqWCvl2RFmHfg4B8a7W4TeRh16g&oe=65B28D0B";
  const fullname="Tayeb Hatem";
  const myposts=[
    {
      context:"Excepteur est est minim aute commodo fugiat eu ut anim tempor sunt labore aliqua. Exercitation proident elit sunt est nisi enim duis id consequat.",
      image:""

    },
    {
      context:"",
      image:"https://img.freepik.com/photos-gratuite/beau-tir-tente-orange-montagne-rocheuse-entouree-arbres-au-coucher-du-soleil_181624-3908.jpg?w=740&t=st=1705845452~exp=1705846052~hmac=45b4c6d15119d59e274c84a61c5015f014d2df840119c9f16e7269a3d347e1ee"

    }
  ];
  return (
    <Profile>
        <div>
            <PostForm/>
          {
            myposts.map(post=>(
              <>
              <Post url={profileimg} name={fullname} context={post.context} imgurl={post.image}/>
              </>
            ))

          }
        </div>
    </Profile>
  )
}
