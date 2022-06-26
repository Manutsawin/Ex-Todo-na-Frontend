import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import "../style/Profile.css";

const iconUser = <FontAwesomeIcon size="10x" color="gray" icon={faUserCircle} />


const Profile = ()=>{
    const [name,setname] = React.useState([]);
    const [role,setrole] = React.useState([]);
    const TokenLocal = localStorage.getItem("token")
    function  Data(req,res){
        axios
            .get(`https://todo-na-backend.herokuapp.com/api/user?token=${TokenLocal}`)
            .then((res)=>{
                setname(res.data.Name)
                setrole(res.data.role)
            })
    }
    
    React.useEffect(()=>{
        Data();
    }, []);
    
    return <div>
       
       
         <section >
                <div className="row">

                    <div className="col-md-5">
                    </div>
                    <div align="center" className="col-md-3 mt-md-5">
                        <div className="Modal">
                            <div>
                                {iconUser}
                            </div>
                            <h1 className="mb-md-4" style={{fontFamily:"Nunito"}}>Profile</h1>
                            <h4 style={{fontFamily:"Nunito"}}>NAME : {name}</h4>
                            <h4 style={{fontFamily:"Nunito"}}>Role : {role}</h4>
                        </div>
                    </div>


                </div>

         </section>
            
      
       
    </div>;
    
}
export default Profile;