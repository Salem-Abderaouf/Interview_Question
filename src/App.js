import React from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import Login from './Login';
import Register from './Register'

const App =()=>{
  return(
    <Router>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
  </Router>
  )
}
export default App;