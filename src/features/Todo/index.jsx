import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import ListPage from "./pages/ListPage/ListPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  // const match = useRouteMatch();
  return (
    <div>
      <Routes>
        <Route path="/todo" element={<ListPage />}></Route>
        <Route path="/detail-page" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default TodoFeature;
