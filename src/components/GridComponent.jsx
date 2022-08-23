import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { PhotoComponent } from "./PhotoComponent";
import { getPhotos } from "../services/photoService";
import { photoActions } from "../redux/photos";

const GridComponent = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photo.photos);
  const page = useSelector((state) => state.photo.page);
  const searchWord = useSelector((state) => state.photo.searchWord);

  useEffect(() => {
    getPhotos(page, searchWord)
      .then((res) => {
        dispatch(photoActions.setPhotos(res.hits));
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [page, searchWord]);

  const renderPhoto = (photo) => {
    if (photo) {
      return (
        <PhotoComponent src={photo.previewURL} key={photo.id}></PhotoComponent>
      );
    }
  };

  return (
    <Grid container spacing={2}>
      {photos.map(renderPhoto)}
    </Grid>
  );
};

export { GridComponent };
