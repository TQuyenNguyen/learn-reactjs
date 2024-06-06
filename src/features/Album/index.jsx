import React from "react";
import AlbumList from "./components/AlbumList";
AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Vietnamese Music",
      thumbnailUrl: "",
    },
    {
      id: 2,
      name: "US/UK Music",
      thumbnailUrl: "",
    },
    {
      id: 3,
      name: "Japanese Music",
      thumbnailUrl: "",
    },
  ];
  return (
    <div>
      <h2>May you like</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
