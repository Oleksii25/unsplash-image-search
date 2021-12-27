import React, { useCallback, useEffect, useState } from "react";
import { Typography, Divider } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import SearchBar from "../SearchBar";
import GridOfImages from "../GridOfImages";
import { useStyles } from "./styles";
import { getImagesByQuery, getImagesByPage } from "../../api";

const ImageSearchView = () => {
  const { divider, loader, errorMessage } = useStyles();

  const [images, setImages] = useState([]);
  const [totalImages, setTotalImages] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isImagesFound, setIsImagesFound] = useState(true);
  const [isError, setIsError] = useState(false);

  const loadImages = useCallback(async (value) => {
    try {
      setIsLoading(true);
      setCurrentPage(1);

      const { results, total, total_pages } = await getImagesByQuery(value);

      setTotalImages(total);
      setTotalPages(total_pages);

      if (results) {
        results.length ? setIsImagesFound(true) : setIsImagesFound(false);
        isError && setIsError(false);

        setImages(results);
      } else {
        setIsError(true);
        setImages([]);
      }
    } catch (err) {
      console.log(err);
      setIsError(true);
      setImages([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const changePage = useCallback(async (page) => {
    try {
      setIsLoading(true);
      setCurrentPage(page);
      const { results } = await getImagesByPage(page);

      if (results) {
        setImages(results);
      } else {
        setImages([]);
        setIsError(true);
      }
    } catch (err) {
      console.log(err);
      setImages([]);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <Typography variant="h3" component="div" gutterBottom>
        Images from unsplash.com
      </Typography>
      <SearchBar loadImages={loadImages} />
      <Divider className={divider} />
      {isLoading && <CircularProgress className={loader} />}
      {Boolean(images?.length) && (
        <GridOfImages
          images={images}
          totalPages={totalPages}
          changePage={changePage}
          currentPage={currentPage}
          totalImages={totalImages}
        />
      )}
      {!isImagesFound && (
        <Typography variant="h5" component="div" gutterBottom>
          Images not found for this parameter!Please,try another query.
        </Typography>
      )}
      {isError && (
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          className={errorMessage}
        >
          Something went wrong...
        </Typography>
      )}
    </>
  );
};

export default React.memo(ImageSearchView);
