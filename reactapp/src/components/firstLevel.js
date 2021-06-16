import React,{ useState } from 'react'
// import React, { useEffect, useRef, useState } from 'react'
import '\../App.css'
import { createUser } from '../services/userS';
import { connect } from 'react-redux';
import { actions } from '../Store/actions';
// import axios from 'axios';


function mapStateToProps(state) {
    return {
        user: state.UserReducer.user
    }
}
const mapDispatchToProps = (dispatch) => ({
    setName: (name) => dispatch(actions.setName(name)),
    setAge: (age) => dispatch(actions.setAge(age)),
    setCity: (city) => dispatch(actions.setCity(city)),
    setMail: (mail) => dispatch(actions.setMail(mail)),
    setPhone: (phone) => dispatch(actions.setPhone(phone)),
})


export default connect(mapStateToProps, mapDispatchToProps)(function FirstLevel(props) {
    const { user, setName,setAge ,setCity,setMail,setPhone } = props;
    const [data, setData] = useState({})

const submitFunction = async () => {
    let data = { name: user.name, age: user.age , city: user.city ,
        mail: user.mail ,
        phone: user.phone ,};
    fetch("http://localhost:3003/createUser", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then((data) => {
            debugger
            setData(data);
          alert(data)
      
        })
        .catch(err => console.log(err))
}
    return (

        <>
        
        <div className="firstL">
            <h1>form_details</h1>
                <div className="mb-3 ">
                    <label htmlFor="nameinput" className="form-label">Name </label>
                    <input type="text" className="form-control" id="nameinput" 
                      onChange={(e) => setName(e.target.value)}  >
                    </input>
                </div>
  
                <div className="mb-3 ">
                    <label htmlFor="ageinput" className="form-label">age</label>
                    <input type="text" className="form-control" id="ageinput" 
                      onChange={(e) => setAge(e.target.value)}  >
                    </input>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="cityinput" className="form-label">city address</label>
                    <input type="text" className="form-control" id="cityinput"  
                      onChange={(e) => setCity(e.target.value)}  >
                    </input>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="mailinput" className="form-label">mail</label>
                    <input type="text" className="form-control" id="mailinput"  
                      onChange={(e) => setMail(e.target.value)}  >
                    </input>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="phoneinput" className="form-label">phone</label>
                    <input type="text" className="form-control" id="phoneinput" 
                      onChange={(e) => setPhone(e.target.value)}  >
                    </input>
                </div>
                {/* <div className="mb-3 ">
                    <label htmlFor="phoneinput" className="form-label">phone</label>
                    <input type="text" className="form-control" id="phoneinput"  value={user.phone}
                      onChange={(e) => setPhone(e.target.value)}  >
                    </input>
                </div> */}
             
 
       
                <button onClick={submitFunction} className="btn btn-info">Login</button>
           
        </div>
               
              
        </>
    )
})








