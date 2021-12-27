import React, { useCallback, useState } from "react";
import { Typography, Divider } from "@material-ui/core";
import SearchBar from "../SearchBar";
import ImageList from "../ImageList";
import { useStyles } from "./styles";
import { getImagesByQuery } from "../../api";

const ImageSearchView = () => {
  const { divider } = useStyles();
  const [images, setImages] = useState([]);

  const loadImages = useCallback(async (value) => {
    try {
      const { results } = await getImagesByQuery(value);
      setImages(results);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Typography variant="h3" component="header" gutterBottom>
        Images from unsplash.com
      </Typography>
      <SearchBar loadImages={loadImages} />
      <Divider className={divider} />
      <ImageList images={images} />
    </>
  );
};

export default React.memo(ImageSearchView);
