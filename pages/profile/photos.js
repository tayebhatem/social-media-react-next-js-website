import Card from "@/Components/Card";
import Profile from "../profile";

export default function Photos() {
  return (
    <Profile>
      <div>
        <Card>
        <h2 className="font-bold text-2xl mb-2">Photos</h2>
        <div className="grid grid-cols-2 gap-2 ">
         <div className="flex items-center rounded-md  h-52 overflow-hidden">
         <img  src="https://img.freepik.com/photos-gratuite/belle-photo-cloture-menant-maison-dans-zone-herbe-verte_181624-18255.jpg?w=740&t=st=1705926646~exp=1705927246~hmac=0ec99be8f3a7bc420d3e34c51574b07e52f39b19cab7672e8d6a56a2efdfe037"/>  
         </div>
         <div className="flex items-center rounded-md h-52  overflow-hidden">
         <img  src="https://img.freepik.com/photos-premium/prairie-montagne-seveuse-dans-foret-petite-cabane-entouree-arbres_691154-39.jpg?w=360"/>
         </div>
         <div className="flex items-center rounded-md h-52  overflow-hidden">
         <img  src="https://img.freepik.com/photos-premium/interieur-ancienne-chapelle-bavaroise_691154-14.jpg?w=740"/>
         </div>
         <div className="flex items-center rounded-md h-52  overflow-hidden">
         <img  src="https://img.freepik.com/photos-gratuite/photographe-se-tient-dans-salle-club-abandonnee-tbilissi-georgie_181624-36786.jpg?size=626&ext=jpg"/>
         </div>
        </div>
        </Card>
      </div>
    </Profile>
  )
}
