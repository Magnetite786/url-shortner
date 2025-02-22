import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


const Login = () => {


   

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            to your account if you already have one !
          </CardDescription>
         
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input name="email" type="email" placeholder="Enter Email" />
          
          </div>
          <div className="space-y-1">
            <Input
              name="password"
              type="password"
              placeholder="Enter Password"
            />
           
          </div>
        </CardContent>
        <CardFooter>
          <Button>
          login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
