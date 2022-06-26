import React from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap';

const Create = ()=>{
    const [createInput,setcreatInput] = React.useState("");
    const [createTime,setcreatTime] = React.useState("");
    const TokenLocal = localStorage.getItem("token")
    

    function  onCreate(){
        axios
            .post("https://todo-na-backend.herokuapp.com/api/task",{
                token : TokenLocal,     
                taskName: createInput,
                time: createTime,
            }).then(()=>{
                setcreatInput("");
                setcreatTime("");
            })
    }
    
    return<div>

        <div className="mt-md-5">    
                <div className="row">
                    <div className="col-md-5">

                    </div>
                    <div align="left" className="col-md-2">
                        <div >
                            <h1 style={{fontFamily:"Nunito"}} align="center" className="mb-lg-5">Create</h1>
                            
                            <input  className="form-control"  placeholder="Enter Activity" value={createInput} onChange={(e) => {

                                setcreatInput(e.target.value);
                            }} />
                        </div>
                        <div className="mt-lg-2">
                            <input className="form-control" value={createTime} type="time" onChange={(e) => setcreatTime(e.target.value)} />
                            <div align="right">
                                <Button align="center" variant="outline-info" className="mt-md-2" onClick={() => onCreate()}>Create</Button>
                            </div>
                           
                        </div>
                    </div>

                </div> 
        </div>

    </div>;
}
export default Create;