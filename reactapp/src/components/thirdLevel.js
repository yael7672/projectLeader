import React,{ useState } from 'react'
// import React, { useEffect, useRef, useState } from 'react'
import '\../App.css'

import { connect } from 'react-redux';
import { actions } from '../Store/actions';

    export default function ThirdLevel(props) {
    const { user, setName,setAge ,setCity,setMail,setPhone } = props;
    const [datauser, setDatauser] = useState({})
    const submitFunction1 = async (e) => {
        e.preventDefault();
        let datauser = { name: user.name, mail: user.mail };
        fetch("http://localhost:3003/getAllUsers", {
            method: "get",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datauser)
        })
            .then(res => {
                if (res.status === 404)
                    alert("User not found :(")
                else return res.json()
                setDatauser(datauser);
            
                
            }
            )
      
            .catch(err => {
                console.log("error: ", err)
            }
            )
    }
    return (

        <>
        
        <div className="thirdL">

                <button onClick={submitFunction1} className="btn btn-info">hii</button>

                <ul type="circle">
                <div className="mb-3 "><li></li></div>
    
           </ul>
 
   
           
        </div>
   
        </>
    )
}
// )








