export default function Card({ children,noPadding,fullHight }) {

  let styles="bg-white shadow-md rounded-md mb-5 max-w-2xl dark:bg-darkcolorCard";
 if(!noPadding){
   styles+=" p-4";
 }
if(fullHight){
  styles+=" h-screen";
}
    return (
      <div className={styles}>
        {children}
      </div>
    );
  }