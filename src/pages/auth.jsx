import { useNavigate, useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "../_components/login";
import Signup from "../_components/signup";
import { UrlState } from "@/context";
import { useEffect } from "react";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");
  const navigate = useNavigate()

  const {isAuthenticated , loading }= UrlState();

  useEffect(()=>{
    if(isAuthenticated && !loading){
      navigate(`/dashboard?${longLink ? `createNew=${longLink}`:""}`)
    }      
  },[isAuthenticated])

  return (
    <div className="mt-28 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">
   
        {searchParams.get("createNew")
          ? "Hold up! Let's Login First..."
          : "Login/SignUp"}
      </h1>

      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="login"><Login></Login> </TabsContent>
        <TabsContent value="signup"><Signup></Signup></TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
