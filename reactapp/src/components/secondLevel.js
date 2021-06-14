// import React,{ useState } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import '\../App.css'

import { connect } from 'react-redux';
import { actions } from '../Store/actions';
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


export default connect(mapStateToProps, mapDispatchToProps)(function SecondLevel(props) {
    const { user, setName,setAge ,setCity,setMail,setPhone } = props;
    return (

        <>
        
        <div className="secondL">
            {/* <h1>hii</h1> */}
                {/* <div className="mb-3 ">
                    <label htmlFor="nameinput" className="form-label">Name </label>
                    <input type="text" className="form-control" id="nameinput"  value={user.name}
                      onChange={(e) => setName(e.target.value)}  >
                    </input>
                </div> */}
                <div className="mb-3 "></div><h4>my name is {user.name} </h4>
                <div className="mb-3 "></div><h4>my age is {user.age} </h4>
                <div className="mb-3 "></div><h4>my city is {user.city} </h4>
                <div className="mb-3 "></div><h4>my mail is {user.mail} </h4>
                <div className="mb-3 "></div><h4>my phone is {user.phone} </h4>
  

 
                {/* <button type="button" className="btn btn-info ">ok </button> */}
           
        </div>
               
                {/* </div>  */}
        </>
    )
})








