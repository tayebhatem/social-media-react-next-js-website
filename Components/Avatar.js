
export default function Avatar({size,url}) {
  let styles="overflow-hidden rounded-full w-12 h-12";
  if(size==='lg'){
    styles="overflow-hidden rounded-full w-24 h-24"
  }
  return (
    <div className={styles}>
        <img  src={url}/>
        </div>
  )
}
