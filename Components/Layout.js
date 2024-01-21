import Navigation from "@/Components/Navigation";

export default function Layout({children}) {
  return (
    <div className="flex  max-w-4xl mx-auto mt-4 gap-6">
    <div className="w-1/3">
    <Navigation/>
    </div>
    <div className="grow">
   {children}
     </div>
   </div>
  )
}
