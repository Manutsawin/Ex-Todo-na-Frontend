import React from "react";
import "../style/ContactPage.css";


const ContactPage = () => {
  return (
    <div>
      <div className="row mb-md-5 mt-md-5">
        <div className="col-md-2">

        </div>
        <h1 className="ml-md-2" style={{fontFamily:"Nunito"}} >Contact</h1>
      </div>
      
        <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-7">
                    <div className="Card-container">
                        <div className="info">
                            <h2>CE-KMITL-59</h2>
                            <div className="Line"></div>
                            <p>Name : Pae_Manutsawin</p>
                            <p>Email : manassawin369@gmail.com</p>
                            <p>Tel : 096-634-7570</p>
                        </div>
                    </div>
                </div>  
                <div  className="col-md-3 mt-md-3">
                    <img align = 'center' src="https://cdn.pixabay.com/photo/2012/04/18/20/10/bat-37759_960_720.png" alt="profile-pic"
                                    style={{
                                        borderRadius: "10%",
                                        width: "150px",
                                        height: "150px",
                                        backgroundColor: "#eaeaea",
                                        objectFit: "cover"
                                    }}
                    />   
                </div>          
            </div>      
    </div>
  );
};

export default ContactPage;