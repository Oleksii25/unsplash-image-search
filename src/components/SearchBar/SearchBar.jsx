import React, { useCallback, useEffect, useState } from "react";
import { TextField, Button, Select, MenuItem } from "@material-ui/core";
import PropTypes from "proptypes";
import {
  saveQuriesToLocalStorage,
  getQueriesFromLocalStorage,
} from "../../helpers";
import { MAX_QUERIES_LENGTH, LOCAL_STORAGE_KEY } from "../../constants";
import i18n from 'i18next';
import { useStyles } from "./styles";

const SearchBar = ({ loadImages }) => {
  const [value, setValue] = useState("");
  const [savedQueries, setSavedQueries] = useState([]);
  const { textField, searchButton, searchContainer } = useStyles();
  const [language, setLanguage] = useState('en');

  const changeLanguage = ({ value }) => {
    i18n.changeLanguage(value);
    setLanguage(value)
  }

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

  const handleKeyDown = useCallback(
    (keyCode) => {
      if (keyCode === "Enter" && value) {
        handleSearch();
      }
    },
    [handleSearch, value]
  );

  useEffect(() => {
    const queries = getQueriesFromLocalStorage(LOCAL_STORAGE_KEY);
    queries?.length && setSavedQueries(queries);
  }, []);

  return (
    <div className={searchContainer}>
      <TextField
        className={textField}
        placeholder="Enter search parameter"
        value={value}
        variant="outlined"
        onChange={({ target: { value } }) => setValue(value)}
        size="small"
        autoFocus
        inputProps={{
          list: "autocomplete",
        }}
        onKeyDown={({ code }) => handleKeyDown(code)}
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
        disabled={!value}
      >
        search photo
      </Button>
      <div>
        <Select
          value={language}
          onChange={({ target }) => changeLanguage(target)}
        >
          <MenuItem value={'en'}>EN</MenuItem>
          <MenuItem value={'ru'}>RU</MenuItem>
          <MenuItem value={'uk'}>UK</MenuItem>
        </Select>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  loadImages: PropTypes.func,
};

export default React.memo(SearchBar);
