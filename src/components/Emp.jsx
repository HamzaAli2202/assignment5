import React from "react";
export const Emp = ({empid,email,cname})=>{
    return(
        <div className="sub">
            
           <h1>Emp Details</h1> 
                <h2>Employee Id:{empid}</h2>
                <h2>Email:{email}</h2>
                <h2>Company Name:{cname}</h2>
        
        </div>
    )
}