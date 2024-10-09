import { Outlet } from "react-router-dom";
import Header from "../_components/header";


const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
       <Header></Header>
        <Outlet></Outlet>
      </main>

      <div className="p-10 text-center bg-gray-800 mt-10">
       This site is made with the help of React + Vite Framework.
       <br></br>
        <span>Made by Prajjwal</span>
      </div>
      
    </div>
  )
}

export default AppLayout
