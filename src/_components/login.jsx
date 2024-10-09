import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BeatLoader } from "react-spinners";
import Error from "./error";
import { useState } from "react";
import * as Yup from "yup"

const Login = () => {
  const[errors,setErrors] = useState([])
  const[fromData,setFormData] = useState({
    email:"",
    password:"",
  });


  const handleInputChange = (e) =>
  {
    const{name,value} =e.target;
    setFormData((prevState) =>({
      ...prevState,
      [name]:value,
    }))
  };

  const handleLogin = async () =>
  {
    setErrors([])
    try
    {
      const schema = Yup.object().shape({
        email: Yup.string()
        .email("Invalid Email")
        .required("email is required"),

        password: Yup.string()
        .min(6,"Password must be at least of 6 characters")
        .required("Password is required")
      });

      await schema.validate(fromData,{abortEarly:false});

    }
    catch(e)
    {
      const newErrors = {};

      e?.inner?.forEach((err) =>{
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }

  }
  return (
  
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>To your account if you have one</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
          <Input
           name="email"
           type="email" 
           placeholder="Enter Email"
           onChange={handleInputChange}/>
          {errors.email && <Error message={errors.email} ></Error>} 
          </div>

          <div className="space-y-1">
          <Input 
          name="password" 
          type="password" 
          placeholder="Enter Password" 
          onChange={handleInputChange}/>
          {errors.password && <Error message={errors.password} ></Error>} 
          </div>
        </CardContent>
        <CardFooter>
        <Button onClick={handleLogin}>
          {true?<BeatLoader size={10} color="#36d7b7"/> : "Login"}
          </Button>
        </CardFooter>
      </Card>
    
  );
};

export default Login;
