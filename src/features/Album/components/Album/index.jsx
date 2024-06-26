import React from "react";
import PropTypes from "prop-types";
import "./style.css";
Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <div className="album__thumbnail">
        <img src={album.thumbnailUrl} alt={album.name} />

        {/* Other controls */}
      </div>
      <p className="album__name">{album.name}</p>
    </div>
  );
}

export default Album;
