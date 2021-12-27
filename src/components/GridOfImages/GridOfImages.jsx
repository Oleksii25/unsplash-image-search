import React from "react";
import PropTypes from "proptypes";
import { Typography } from "@material-ui/core";
import { Pagination } from "@mui/material";
import ImageList from "../ImageList";
import { useStyles } from "./styles";

const GridOfImages = ({
  images,
  totalPages,
  changePage,
  currentPage,
  totalImages,
}) => {
  const { pagination } = useStyles();

  return (
    <>
      <ImageList images={images} />
      <Typography variant="h5" component="div" gutterBottom>
        {`Found ${totalImages} photos`}
      </Typography>
      <Pagination
        count={totalPages}
        color="primary"
        page={currentPage}
        className={pagination}
        onChange={(e, newPage) => changePage(newPage)}
      />
    </>
  );
};

GridOfImages.propTypes = {
  images: PropTypes.array,
  totalPages: PropTypes.number,
  changePage: PropTypes.func,
  currentPage: PropTypes.number,
  totalImages: PropTypes.number,
};

export default React.memo(GridOfImages);
