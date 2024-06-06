import React, { useEffect } from "react";
import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import { Link, Route, Routes } from "react-router-dom";
import productApi from "./api/productApi";
import ListPage from "./features/Todo/pages/ListPage/ListPage";

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const productlist = await productApi.getAll();
      console.log(productlist);
    };
    fetchProduct();
  }, []);
  return (
    <div className="App">
      Homepage Header
      <p>
        <Link to="/todo">Todo</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
      <Routes>
        <Route path="/todo" element={<ListPage />}></Route>
        <Route path="/albums" element={<AlbumFeature />}></Route>
      </Routes>
    </div>
  );
}

export default App;
