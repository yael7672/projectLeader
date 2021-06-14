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


export default connect(mapStateToProps, mapDispatchToProps)(function FirstLevel(props) {
    const { user, setName,setAge ,setCity,setMail,setPhone } = props;
    return (

        <>
        
        <div className="firstL">
            <h1>form_details</h1>
                <div className="mb-3 ">
                    <label htmlFor="nameinput" className="form-label">Name </label>
                    <input type="text" className="form-control" id="nameinput"  value={user.name}
                      onChange={(e) => setName(e.target.value)}  >
                    </input>
                </div>
  
                <div className="mb-3 ">
                    <label htmlFor="ageinput" className="form-label">age</label>
                    <input type="text" className="form-control" id="ageinput"  value={user.age}
                      onChange={(e) => setAge(e.target.value)}  >
                    </input>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="cityinput" className="form-label">city address</label>
                    <input type="text" className="form-control" id="cityinput"  value={user.city}
                      onChange={(e) => setCity(e.target.value)}  >
                    </input>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="mailinput" className="form-label">mail</label>
                    <input type="text" className="form-control" id="mailinput"  value={user.mail}
                      onChange={(e) => setMail(e.target.value)}  >
                    </input>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="phoneinput" className="form-label">phone</label>
                    <input type="text" className="form-control" id="phoneinput"  value={user.phone}
                      onChange={(e) => setPhone(e.target.value)}  >
                    </input>
                </div>
 
                <button type="button" className="btn btn-info ">save  </button>
                {/* <button onClick={createUser} className="btn btn-info">Login</button> */}
           
        </div>
               
                {/* </div>  */}
        </>
    )
})








