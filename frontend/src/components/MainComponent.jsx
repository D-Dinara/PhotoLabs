import React, { useContext } from 'react';
import Context from "../Context";
import FavoritePhotos from "routes/FavoritePhotos";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const MainComponent = () => {
  const { state } = useContext(Context);
  const { displayModal, displayFavPhotos } = state;

  return (
    <>
      {displayFavPhotos ? <FavoritePhotos /> : <HomeRoute />}
      {displayModal.showModal && <PhotoDetailsModal />}
    </>
  );
};

export default MainComponent;