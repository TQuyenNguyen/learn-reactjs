import React from "react";
import DetailPage from "./pages/DetailPage/DetailPage";
import ListPage from "./pages/ListPage/ListPage";
import { Route, Switch } from "react-router";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  // const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path="/todo" component={ListPage}></Route>
        <Route path="/detail-page" component={DetailPage}></Route>
      </Switch>
    </div>
  );
}

export default TodoFeature;
