import React from "react";
import Header from "./Header";
import Shoutouts from "./Shoutouts";
import StudentContainer from "./StudentContainer";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import ClassPhoto from "./ClassPhoto";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <ClassPhoto />
        </Route>
        <Route path="/studentlist">
          <StudentContainer />
        </Route>
        <Route path="/shoutouts">
          <Shoutouts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
