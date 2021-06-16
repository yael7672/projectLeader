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

    export default connect(mapStateToProps)(function SecondLevel(props) {
    const { user, setName,setAge ,setCity,setMail,setPhone } = props;
    return (

        <>
        
        <div className="secondL">
  
                <div className="mb-3 "></div><h4>my name is {user.name} </h4>
                <div className="mb-3 "></div><h4>my age is {user.age} </h4>
                <div className="mb-3 "></div><h4>my city is {user.city} </h4>
                <div className="mb-3 "></div><h4>my mail is {user.mail} </h4>
                <div className="mb-3 "></div><h4>my phone is {user.phone} </h4>
  

 
           
        </div>
               
              
        </>
    )
})








