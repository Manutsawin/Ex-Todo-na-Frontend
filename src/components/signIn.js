import React from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap';
import "./style/signIn.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook,faSignInAlt,faNewspaper} from '@fortawesome/free-solid-svg-icons'

const iconAccount = <FontAwesomeIcon size="5x" color="white" icon={faAddressBook} />
const iconLogin = <FontAwesomeIcon size="5x" color="white" icon={faSignInAlt} />
const iconTodona = <FontAwesomeIcon size="5x" color="white" icon={faNewspaper} />


const SignIn = ({setSession})=>{
   
    const [createInputName,setcreatInputName] = React.useState("");
    const [createInputUser,setcreatInputUser] = React.useState("");
    const [createInputPassword,setcreatInputPassword] = React.useState("");
    const [comfirmInputPassword,setComfirmInputPassword] = React.useState("");
    const [UserSame,setUserSame] = React.useState(false);
    const [coparePassword,setCoparePassword] = React.useState(false);
    const [numPasswordNotifications,setNumPasswordNotifications]=React.useState(false);
    const [numUserIDNotifications,setNumUserIDNotifications]=React.useState(false);
    const [numNameNotifications,setNumNameNotifications]=React.useState(false);
    
    

    function  signin(){
       
        if(createInputPassword==comfirmInputPassword)
        {
            axios
            .post("https://todo-na-backend.herokuapp.com/api/signIn",{
                Name: createInputName,
                UserID: createInputUser,
                Password: createInputPassword,
            }).then((res)=>{
                    
                    console.log(res.data)

                    if(res.data=="UserID Same"){
                        setUserSame(true);
                    }
                    else if(res.data=="password<6")
                    {
                        setNumPasswordNotifications(true);
                    }
                    else if(res.data=="userID<6")
                    {
                        setNumUserIDNotifications(true);
                    }
                    else if(res.data=="name<1")
                    {
                        setNumNameNotifications(true)
                    }
                    else{
                        localStorage.setItem("token",res.data)
                        localStorage.setItem("isLogined",true) 
                        setSession({
                            isLoggedin :true 
                        });
                    }   
            })
        }
        else{
            setCoparePassword(true);
        }
        
       
    }

    
    return <div>
            <section className="Wave-gradient">
                <div  className="row">
                    <div className="col-md-8">
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
                        <div className="Modal" >
                            <h1 style={{fontFamily:"Nunito"}}>Sign in</h1>
                            <br></br>
                            <h6 align = 'left'>Name :</h6>
                            <input type="Name" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Name" value={createInputName} onChange={(e) => {

                                setcreatInputName(e.target.value);
                            }} />
                            {
                            numNameNotifications ? 
                            (
                                <h7><div className="red">Please enter your name</div></h7>
                            )  
                            : 
                            (
                                <h1></h1>
                            )
                            }
                            <br></br>
                            <h6 align = 'left'>User ID :</h6>
                            <input type="User" className="form-control"  aria-describedby="emailHelp" placeholder="Enter User" value={createInputUser} onChange={(e) => {

                                setcreatInputUser(e.target.value);
                            }} />
                            {
                            numUserIDNotifications ? 
                            (
                                <h7><div className="red">User must be more than 6 </div></h7>
                            )  
                            : 
                            (
                                <h1></h1>
                            )
                            }
                            {
                            UserSame ? 
                            (
                                <h7><div className="red">The user has been used</div></h7>
                            )  
                            : 
                            (
                                <h1></h1>
                            )
                            }
                            <br></br>
                            <h6 align = 'left'>Password :</h6>
                            <input type="Password" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Password" value={createInputPassword} onChange={(e) => {

                                setcreatInputPassword(e.target.value);
                            }} />
                            {
                            numPasswordNotifications ? 
                            (
                                <h7><div className="red">Passwords must be more than 6 </div></h7>
                            )  
                            : 
                            (
                                <h1></h1>
                            )
                            }
                            <br></br>
                            <h6 align = 'left'>Comfirm password :</h6>
                            <input type="Password" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Password" value={comfirmInputPassword} onChange={(e) => {

                                setComfirmInputPassword(e.target.value);
                            }} />
                            {
                            coparePassword ? 
                            (
                                <h7><div className="red">password != comfirm password</div></h7>
                            )  
                            : 
                            (
                                <h1></h1>
                            )
                            }
                            <br></br>
                            <Button variant="outline-info" className="mr-sm-2" style={{ fontFamily: "Nunito" }} onClick={() => {
                                setCoparePassword(false);
                                setUserSame(false);
                                setNumPasswordNotifications(false);
                                setNumUserIDNotifications(false);
                                setNumNameNotifications(false)
                                signin();
                            }}>Create Account</Button>

                             
                       </div>
                       </center>   
                    </div>   
                </div>
               
               
                    
                    
                
            </section>
       

       
             
    </div>;
    
}
export default SignIn;