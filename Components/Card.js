export default function Card({ children,noPadding }) {

  let styles="bg-white shadow-md rounded-md mb-5 overflow-hidden";
 if(!noPadding){
   styles+=" p-4";
 }

    return (
      <div className={styles}>
        {children}
      </div>
    );
  }