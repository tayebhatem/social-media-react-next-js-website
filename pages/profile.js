import Avatar from "@/Components/Avatar";
import Card from "@/Components/Card";
import Layout from "@/Components/Layout";

export default function Profile() {
  return (
    <Layout>
        <Card noPadding={true}>
        <div className="relative">
        <div className="h-52 overflow-hidden flex justify-center items-center">
                <img  src="https://img.freepik.com/photos-gratuite/new-york-city_649448-1679.jpg?w=740&t=st=1705866503~exp=1705867103~hmac=042dc4197d845864581665e650901b6ff7ce00829c537a5e8c372c60f712de30"/>
               
            </div>
        <div className="absolute left-6 -bottom-8 ">
               <Avatar size={'lg'}/>
               </div>
        </div>
           
           
            <div className="p-4">
                Tayeb Hatem
            </div>
        </Card>
    </Layout>
  )
}
