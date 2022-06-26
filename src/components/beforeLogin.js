import React from 'react'
import Login from  "./Login"
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import {  useState } from 'react';
import axios from 'axios'
import Access from "./access"
import Contact from "./pages/ContactPage"
import SignIn from "./signIn"
import Navbar from "./Nav/Navbar"



const BeforeLogin = ()=>{
    
  const [Session,setSession] = useState({
    isLoggedin : false ,
  });

  const TokenLocal = localStorage.getItem("token")
  const isloginedLocal = localStorage.getItem("isLogined");

  function  Check(){
    if(TokenLocal==null)
    {
      console.log("null")
    }
    else{
      axios
      .post(`https://todo-na-backend.herokuapp.com/api/check?token=${TokenLocal}`)
      .then((res)=>{
         if(res.data==true)
         {
          localStorage.setItem("isLogined",true) 
          setSession ({
             isLoggedin : true
           })
         }
         else{
          localStorage.setItem("isLogined",false) 
          setSession ({
            isLoggedin : false
          })
         }
      })
    }

  }

  React.useEffect(()=>{
    Check();
  }, []);

  
  return (
    <div>
       
       {
        isloginedLocal ? 
        (
          <Access />
        )  
        : 
        (
          <div>
            <Navbar/>
            <Router>
                <Switch>
                  <Route exact path="/" component={() =>  <Login setSession={setSession}/>} />
                  <Route path="/signIn" component={() =>  <SignIn setSession={setSession}/>}/>
                  <Route path="/contact" component={() =>  <Contact />}/>
                  <Route  component={() =>   <Login setSession={setSession}/>}/>
                </Switch>
            </Router>
          </div>
          
        )
      }
    </div>
   
  );  

}
export default BeforeLogin;