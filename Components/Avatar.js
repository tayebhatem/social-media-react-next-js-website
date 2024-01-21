
export default function Avatar({size}) {
  let styles="overflow-hidden rounded-full w-12 h-12";
  if(size==='lg'){
    styles="overflow-hidden rounded-full w-20 h-20"
  }
  return (
    <div className={styles}>
        <img  src="https://img.freepik.com/photos-gratuite/homme-age-mur-portant-penchee-fond-couleur-rouillee_150588-73.jpg?w=360&t=st=1705842956~exp=1705843556~hmac=a4083ccc85d13bfa0595a4132dadf16743631b275eb335592bf594c5369b22e3"/>
        </div>
  )
}
