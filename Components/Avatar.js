import Image from "next/image";
export default function Avatar({size,url}) {
  let styles="flex items-center overflow-hidden cursor-pointer rounded-full w-12 h-12 bg-gray-200   dark:bg-darkcolorInput";
  if(size==='lg'){
    styles="flex items-center overflow-hidden cursor-pointer rounded-full w-24 h-24 bg-gray-200  dark:bg-darkcolorInput"
  }else if (size=='md') {
    styles="flex items-center overflow-hidden cursor-pointer rounded-full w-16 h-16 bg-gray-200  dark:bg-darkcolorInput"
  }else if (size=='sm') {
    styles="flex items-center overflow-hidden cursor-pointer rounded-full w-10 h-10 bg-gray-200  dark:bg-darkcolorInput"
  } 
  return (
    
    <div className={styles}>
        <Image alt="photo" width={300} height={300} className="grow"  src={url}/>
        </div>
  )
}
