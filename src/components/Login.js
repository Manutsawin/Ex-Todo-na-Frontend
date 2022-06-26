import React from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap';
import "./style/Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle,faUnlock,faAddressBook,faSignInAlt,faNewspaper} from '@fortawesome/free-solid-svg-icons'



const iconID = <FontAwesomeIcon size="1x" color="gray" icon={faUserCircle} />
const iconPass = <FontAwesomeIcon size="1x" color="gray" icon={faUnlock} />
const iconAccount = <FontAwesomeIcon size="5x" color="white" icon={faAddressBook} />
const iconLogin = <FontAwesomeIcon size="5x" color="white" icon={faSignInAlt} />
const iconTodona = <FontAwesomeIcon size="5x" color="white" icon={faNewspaper} />

const Login = ({setSession})=>{
   
    const [createInputUser,setcreatInputUser] = React.useState("");
    const [createInputPassword,setcreatInputPassword] = React.useState("");
    const [userNotifications,setUserNotifications]=React.useState(false);
    const [passwordNotifications,setPasswordNotifications]=React.useState(false);
    
    function  logIn(){
        axios
            .post("https://todo-na-backend.herokuapp.com/api/",{
                UserID: createInputUser,
                Password: createInputPassword,
            }).then((res)=>{
                if(res.data=="Password incorret")
                {
                   setPasswordNotifications(true);
                }
                else if(res.data=="User incorret")
                {
                    setUserNotifications(true);
                }
                else{
                    console.log(res.data)
                    localStorage.setItem("token",res.data)
                    localStorage.setItem("isLogined",true) 
                    setSession({
                        isLoggedin :true 
                    });
                }
               
            })
    }

    
    return <div>
 
            <section className="Wave-gradient">
                <div className="row">

                    <div  className="col-md-8">
                        <br></br><br></br><br></br><br></br>
                        <div className="row">
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-8">
                                <div className="Card-1 white">
                                    <div className="row">
                                        <div className="col-md-3">
                                            {iconAccount}
                                        </div>
                                        <div className="col-md-9">
                                            <h5 className="mt-md-2">Have an account</h5>
                                            <h7>you can click sign in to create account.</h7>
                                        </div>
                                       
                                        
                                    </div>
                                    <br></br><br></br><br></br><br></br>
                                    <div className="row">
                                        <div className="col-md-3">
                                            {iconLogin}
                                        </div>
                                        <div className="col-md-9">
                                            <h5 className="mt-md-1">Login</h5>
                                            <h7>( If you already have an account ) you can click Login to visit the website.</h7>
                                        </div>
                                       
                                        
                                    </div>
                                    <br></br><br></br><br></br><br></br>
                                    <div className="row">
                                        <div className="col-md-3">
                                            {iconTodona}
                                        </div>
                                        <div className="col-md-9">
                                            <h5 className="mt-md-1">Todo na</h5>
                                            <h7>On this website you can take notes of your event schedule.</h7>
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">

                        <br></br><br></br><br></br><br></br>
                        <center>
                        <div className="Modal">
                            <h1 style={{fontFamily:"Nunito"}} >Login</h1>
                            <br></br>
                            <h6  align = 'left'>User ID :</h6>
                            <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping">{iconID}</span>
                                <input type="User" className="form-control"   placeholder="Enter User" value={createInputUser} onChange={(e) => {

                                    setcreatInputUser(e.target.value);
                                }} />
                            </div>
                            {
                            userNotifications ? 
                            (
                                <h7><div className="red">The user you entered is incorret</div></h7>
                            )  
                            : 
                            (
                                <h1></h1>
                            )
                            }
                            <br></br>
                            <h6  align = 'left'>Password :</h6>
                            <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping">{iconPass}</span>
                                <input type="Password" className="form-control"  aria-describedby="passwordHelp" placeholder="Enter Password" value={createInputPassword} onChange={(e) => {

                                    setcreatInputPassword(e.target.value);
                                }} />
                            </div>
                            {
                            passwordNotifications ? 
                            (
                                <h7><div className="red">The password you entered is incorret</div></h7>
                            )  
                            : 
                            (
                                <h1></h1>
                            )
                            }
                            <br></br><br></br>

                            <center>
                                <Button variant="outline-info" className="mr-sm-2" style={{ fontFamily: "Nunito" }} onClick={() => {
                                    logIn()
                                    setPasswordNotifications(false);
                                    setUserNotifications(false);
                                }}>Login</Button>
                            </center>
                        </div>
                        </center>            
                    </div>


                </div>


            </section>
        
        
        
        
    </div>;
    
   
}
export default Login;