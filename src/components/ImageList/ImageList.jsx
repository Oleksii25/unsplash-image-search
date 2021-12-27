import React from "react";
import { ImageList as List, ImageListItem } from "@material-ui/core";
import { useStyles } from "./styles";

const ImageList = ({ images }) => {
  const { imageList, imageCard } = useStyles();

  return (
    <List className={imageList} cols={5} rowHeight={200} gap={15}>
      {images.map((image) => (
        <ImageListItem key={image.id} className={imageCard}>
          <img
            src={image.urls.small}
            alt={image.alt_description}
            loading="lazy"
            title={image.alt_description}
          />
        </ImageListItem>
      ))}
    </List>
  );
};

export default React.memo(ImageList);
