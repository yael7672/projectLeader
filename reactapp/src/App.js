import './App.css';
import store from './Store/Store';
import FirstLevel from './components/firstLevel';
import SecondLevel from './components/secondLevel';
import { Provider } from "react-redux";
import { createStore } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";




function App() {
  // return (
  //   <>
  //       <Provider store={store}>
  //          {/* <FirstLevel/>
  //          {/* <SecondLevel/> */}
  //          </Provider> */}
  //          <Router>


  //          function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-dark bg-dark navbar navbar-expand-lg">
         
   

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">first <span className="sr-only">(current)</span></Link>
                {/* <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                <h1>hii</h1>
              </li>
              <li className="nav-item active">
                <Link to="/secondLevel" className="nav-link">SecondLevel <span className="sr-only">(current)</span></Link>
                {/* <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
              </li>
              </ul>
        
              </div>
        </nav>
        
        {/* <h1 style={{ "color": "grey" }}>user detalis </h1> */}
        <Switch>
          <Provider store={store}>
          <Route exact path="/">
           <FirstLevel></FirstLevel> 
          </Route>
          <Route path="/secondLevel">
            <SecondLevel></SecondLevel>
          </Route>
         {/*  <Route path="/signUp">
            <SignUp></SignUp>
          </Route> 
          {/* <Route path="/weather">
            <Weather></Weather>
          </Route> */}
   
          {/* <Route exact path="/searchesHistory/:userId">
            <SearchesHistory />
          </Route> */}
        </Provider>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
