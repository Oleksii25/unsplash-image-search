import React from "react";
import { ImageList as List, ImageListItem } from "@material-ui/core";

const ImageList = ({ images }) => {
  return (
    <List sx={{ width: 500, height: 450 }} cols={5} rowHeight={200}>
      {images.map((image) => (
        <ImageListItem key={image.id}>
          <img
            src={image.urls.small}
            alt={image.alt_description}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </List>
  );
};

export default React.memo(ImageList);
