import React, { useEffect } from "react";
import "./App.css";
import AlbumFeature from "./features/Album";
// import TodoFeature from "./features/Todo";
import productApi from "./api/productApi";
import ListPage from "./features/Todo/pages/ListPage/ListPage";
import CounterFeature from "./features/Counter/Counter";
import Header from "components/Header/Header";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
import ProductFeature from "features/Product";
import ProductListPage from "features/Product/pages/ProductListPage";
import { Route, Switch } from "react-router";
import CartFeature from "features/Cart/CartFeature";

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const showNoti = () => {
    enqueueSnackbar("Register Successfully", { variant: "success" });
  };

  return (
    <div className="App">
      <Header />

      {/* <Button onClick={showNoti}>Show notification</Button> */}
      <Switch>
        <Route path="/counter" component={CounterFeature}></Route>
        <Route path="/todo" component={ListPage}></Route>
        <Route path="/albums" component={AlbumFeature}></Route>
        <Route path="/products" component={ProductFeature}></Route>
        <Route path="/cart" component={CartFeature}></Route>
      </Switch>
    </div>
  );
}

export default App;
