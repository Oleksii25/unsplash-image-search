import React, { useCallback, useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import {
  saveQuriesToLocalStorage,
  getQueriesFromLocalStorage,
} from "../../helpers";
import { MAX_QUERIES_LENGTH, LOCAL_STORAGE_KEY } from "../../constants";
import { useStyles } from "./styles";

const SearchBar = ({ loadImages }) => {
  const [value, setValue] = useState("");
  const [savedQueries, setSavedQueries] = useState([]);
  const { textField, searchButton, searchContainer, dataList } = useStyles();

  const saveQueries = useCallback(() => {
    let newSavedQueries;
    const duplicateIndex = savedQueries.findIndex(
      (query) => query.toLowerCase() === value.toLowerCase()
    );

    if (duplicateIndex !== -1) {
      const copyQueries = [...savedQueries];
      copyQueries.splice(duplicateIndex, 1); //removing duplicate
      newSavedQueries = [value, ...copyQueries];
    } else {
      newSavedQueries =
        savedQueries.length < MAX_QUERIES_LENGTH
          ? [value, ...savedQueries]
          : [value, ...savedQueries.slice(0, 4)];
    }

    setSavedQueries(newSavedQueries);
    saveQuriesToLocalStorage(LOCAL_STORAGE_KEY, newSavedQueries);
  }, [savedQueries, value]);

  const handleSearch = useCallback(() => {
    loadImages(value);

    saveQueries();

    setValue("");
  }, [loadImages, saveQueries, value]);

  useEffect(() => {
    const queries = getQueriesFromLocalStorage(LOCAL_STORAGE_KEY);
    console.log(queries);
    queries?.length && setSavedQueries(queries);
  }, []);

  return (
    <div className={searchContainer}>
      <TextField
        className={textField}
        placeholder="Image Type"
        value={value}
        variant="outlined"
        onChange={({ target: { value } }) => setValue(value)}
        size="small"
        autoFocus
        inputProps={{
          list: "autocomplete",
        }}
      />
      <datalist id="autocomplete">
        {savedQueries.length &&
          savedQueries.map((query) => {
            return <option key={query} value={query} />;
          })}
      </datalist>
      <Button
        className={searchButton}
        variant="contained"
        onClick={handleSearch}
        size="large"
        color="primary"
      >
        search images
      </Button>
    </div>
  );
};

export default React.memo(SearchBar);
