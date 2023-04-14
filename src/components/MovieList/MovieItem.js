import React from "react";
import KEY_URLS from "../../constants";
import axios from "axios";

// const { CONFIG_URL } = KEY_URLS;
// // get Image URL prefix
// const getImgUrlPrefix = async (poster_sz = 4, bg_sz = 2, logo_sz = 0) => {
//   try {
//     const configData = await axios.get(CONFIG_URL);
//     const configImgData = configData.data.images;
//     console.log(configImgData);

//     const posterUrlPrefix =
//       configImgData.secure_base_url + configImgData.poster_sizes[poster_sz];
//     const bgUrlPrefix =
//       configImgData.secure_base_url + configImgData.backdrop_sizes[bg_sz];
//     const logoUrlPrefix =
//       configImgData.secure_base_url + configImgData.logo_sizes[logo_sz];

//     console.log(bgUrlPrefix);

//     return { posterUrlPrefix, bgUrlPrefix, logoUrlPrefix };
//   } catch (errors) {
//     console.error(errors);
//   }
// };

// getImgUrlPrefix();

function MovieItem() {
  const likeMovie = () => {};

  const blockedMovie = () => {};

  return (
    <div className="movie-item-container">
      <img className="movie-img" src="" alt="movie-title"></img>
      <button className="btn-like" onClick={likeMovie}>
        Like
      </button>
      <button className="btn-block" onClick={blockedMovie}>
        Block
      </button>
      <div className="movie-title">title</div>
      <div className="movie-release-date">release-date</div>
      <div className="count-and-score">
        <span>Vote count:</span> | <span>Avergae Score: </span>
      </div>
      <div className="movie-overview">Overview</div>
    </div>
  );
}

export default MovieItem;
