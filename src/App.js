import React, { useEffect } from "react";
import "./App.css";
import AlbumFeature from "./features/Album";
// import TodoFeature from "./features/Todo";
import { Link, Route, Routes } from "react-router-dom";
import productApi from "./api/productApi";
import ListPage from "./features/Todo/pages/ListPage/ListPage";
import CounterFeature from "./features/Counter/Counter";
import Header from "components/Header/Header";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
import ProductFeature from "features/Product";
import ProductListPage from "features/Product/pages/ProductListPage";

function App() {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 10,
      };
      const productlist = await productApi.getAll(params);
      console.log(productlist);
    };
    fetchProduct();
  }, []);

  const showNoti = () => {
    enqueueSnackbar("Register Successfully", { variant: "success" });
  };

  return (
    <div className="App">
      <Header />

      {/* <Button onClick={showNoti}>Show notification</Button> */}
      <Routes>
        <Route path="/counter" element={<CounterFeature />}></Route>
        <Route path="/todo" element={<ListPage />}></Route>
        <Route path="/albums" element={<AlbumFeature />}></Route>
        <Route path="/products" element={<ProductFeature />}></Route>
      </Routes>
    </div>
  );
}

export default App;
