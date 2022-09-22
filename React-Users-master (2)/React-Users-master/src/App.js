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
import AddAssetstype from "./components/users8/AddAssetstype";
import Assets from "./components/pages/Assets";
import Assetstype from "./components/pages/Assetstype";
import EditHeads from "./components/users2/EditHeads";
import EditTypes from "./components/users3/EditTypes";
import EditUom from "./components/users4/EditUom";
import EditFamily from "./components/users5/EditFamily";
import EditProductsname from "./components/users6/EditProductsname";
import EditAssets from "./components/users7/EditAssets";
import EditAssetstype from "./components/users8/EditAssetstype";
import Sidebar from "./Sidebar";
import Sister from "./components/pages/Sister";
import AddSister from "./components/users9/AddSister";
// import Person from "./components/pages/Person";

import ViewBusiness from "./components/users1/ViewBusiness";
import EditSister from "./components/users9/EditSister";
import ViewSister from "./components/users9/ViewSister";
import ViewProductsname from "./components/users6/ViewProductsname";
import ViewFamily from "./components/users5/ViewFamily";
import ViewTypes from "./components/users3/ViewTypes";
import ViewHeads from "./components/users2/ViewHeads";
import ViewUom from "./components/users4/ViewUom";
import ViewAssetstype from "./components/users8/ViewAssetstype";

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
          <Route exact path="/assetstype" component={Assetstype} /> 
          {/* <Route exact path="/person" component={Person} />  */}
          <Route exact path="/sister" component={Sister} /> 
          

          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users1/add" component={AddBusiness} /> 
          <Route exact path="/users2/add" component={AddHeads} />
          <Route exact path="/users3/add" component={AddTypes} />
          <Route exact path="/users4/add" component={AddUom} />
          <Route exact path="/users5/add" component={AddFamily} />
          <Route exact path="/users6/add" component={AddProductsname} />
          <Route exact path="/users7/add" component={AddAssets} />
          <Route exact path="/users9/add" component={AddSister} />
          <Route exact path="/users8/add" component={AddAssetstype} />

          

          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users1/edit/:id" component={EditBusiness} />
          <Route exact path="/users2/edit/:id" component={EditHeads} />
          <Route exact path="/users3/edit/:id" component={EditTypes} />
          <Route exact path="/users4/edit/:id" component={EditUom} />
          <Route exact path="/users5/edit/:id" component={EditFamily} />
          <Route exact path="/users6/edit/:id" component={EditProductsname} />
          <Route exact path="/users7/edit/:id" component={EditAssets} />
          <Route exact path="/users8/edit/:id" component={EditAssetstype} />
          <Route exact path="/users9/edit/:id" component={EditSister} />



          <Route exact path="/users/:id" component={User} />
          <Route exact path="/users1/:id" component={ViewBusiness} />
          <Route exact path="/users9/:id" component={ViewSister} />
          <Route exact path="/users6/:id" component={ViewProductsname} />
          <Route exact path="/users5/:id" component={ViewFamily} />
          <Route exact path="/users4/:id" component={ViewUom} />
  
          <Route exact path="/users3/:id" component={ViewTypes} />
          <Route exact path="/users2/:id" component={ViewHeads} />
          <Route exact path="/users8/:id" component={ViewAssetstype} />




          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
