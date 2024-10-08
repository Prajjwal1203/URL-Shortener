import { Outlet } from "react-router-dom";
import Header from "../_components/header";


const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen contianer">
       <Header></Header>
        <Outlet></Outlet>
      </main>

      <div className="p-10 text-center bg-gray-800 mt-10">
        Made by Prajjwal

      </div>
      
    </div>
  )
}

export default AppLayout
