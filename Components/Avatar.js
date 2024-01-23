
export default function Avatar({size,url}) {
  let styles="overflow-hidden cursor-pointer rounded-full w-12 h-12";
  if(size==='lg'){
    styles="overflow-hidden cursor-pointer rounded-full w-24 h-24"
  }else if (size=='md') {
    styles="overflow-hidden cursor-pointer rounded-full w-16 h-16"
  }
  return (
    <div className={styles}>
        <img  src={url}/>
        </div>
  )
}
