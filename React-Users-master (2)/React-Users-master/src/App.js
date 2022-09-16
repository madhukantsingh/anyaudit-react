import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Business from "./components/pages/Business";
import Heads from "./components/pages/Heads";
import Types from "./components/pages/Types";
import Uom from "./components/pages/Uom";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch

} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
 import AddBusiness from "./components/users1/AddBusiness";
import EditUser from "./components/users/EditUser";
 import EditBusiness from "./components/users1/EditBusiness";
import User from "./components/users/User";
import AddHeads from "./components/users2/AddHeads";



import AddTypes from "./components/users3/AddTypes";

import AddUom from "./components/users4/AddUom";
import Family from "./components/pages/Family";
import AddFamily from "./components/users5/AddFamily";
import Productsname from "./components/pages/Productsname";
import AddProductsname from "./components/users6/AddProductsname";
import AddAssets from "./components/users7/AddAssets";
import Assets from "./components/pages/Assets";
import EditHeads from "./components/users2/EditHeads";
import EditTypes from "./components/users3/EditTypes";
import EditUom from "./components/users4/EditUom";
import EditFamily from "./components/users5/EditFamily";
import EditProductsname from "./components/users6/EditProductsname";
import EditAssets from "./components/users7/EditAssets";
import Sidebar from "./Sidebar";

// import ViewBusiness from "./components/users1/ViewBusiness";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Sidebar/> */}
        <Switch>
          <Route exact path="/" component={Home} />
           <Route exact path="/business/" component={Business} />
          <Route exact path="/heads" component={Heads} /> 
          <Route exact path="/types" component={Types} /> 
          <Route exact path="/uom" component={Uom} /> 
          <Route exact path="/family" component={Family} /> 
          <Route exact path="/productname" component={Productsname} /> 
          <Route exact path="/assets" component={Assets} /> 
          

          <Route exact path="/users/add" component={AddUser} />
           <Route exact path="/users1/add" component={AddBusiness} /> 
          <Route exact path="/users2/add" component={AddHeads} />
          <Route exact path="/users3/add" component={AddTypes} />
          <Route exact path="/users4/add" component={AddUom} />
          <Route exact path="/users5/add" component={AddFamily} />
          <Route exact path="/users6/add" component={AddProductsname} />
          <Route exact path="/users7/add" component={AddAssets} />
          

          <Route exact path="/users/edit/:id" component={EditUser} />
          {/* <Route exact path="/users1/edit/:id" component={EditBusiness} /> */}
          <Route exact path="/users2/edit/:id" component={EditHeads} />
          <Route exact path="/users3/edit/:id" component={EditTypes} />
          <Route exact path="/users4/edit/:id" component={EditUom} />
          <Route exact path="/users5/edit/:id" component={EditFamily} />
          <Route exact path="/users6/edit/:id" component={EditProductsname} />
          <Route exact path="/users7/edit/:id" component={EditAssets} />


          <Route exact path="/users/:id" component={User} />
          {/* <Route exact path="/users1/:id" component={ViewBusiness} /> */}

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;