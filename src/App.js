import React, { useEffect, useState } from "react";
import "./App.css";
import { TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const LOCAL_STORAGE_KEY = "searchQueries";
const MAX_QUERIES_LENGTH = 5;

function App() {
  const [value, setValue] = useState("");
  const [lastFiveQueries, setLastFiveQueries] = useState([]);
  const [options, setOptions] = useState([]);

  const handleSearch = () => {
    setValue("");

    if (lastFiveQueries.length < MAX_QUERIES_LENGTH) {
      setLastFiveQueries((prevQueries) => [value, ...prevQueries]);
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify([value, ...lastFiveQueries])
      );
    } else {
      const lastFourQueries = lastFiveQueries.slice(0, 4);
      console.log(lastFourQueries);
      setLastFiveQueries([value, ...lastFourQueries]);
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify([value, ...lastFourQueries])
      );
    }
  };

  useEffect(() => {
    const queriesFromStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedQueries = JSON.parse(queriesFromStorage);
    parsedQueries && setLastFiveQueries(parsedQueries);
  }, []);

  useEffect(() => {
    if (lastFiveQueries) {
      const preparedOptions = lastFiveQueries.map((query) => ({
        title: query,
      }));
      setOptions(preparedOptions);
    }
  }, [lastFiveQueries]);

  console.log(lastFiveQueries);
  console.log(options);

  return (
    <div className="App">
      <TextField
        placeholder="Input request"
        value={value}
        variant="outlined"
        onChange={({ target: { value } }) => setValue(value)}
        type="text"
        autoFocus
        inputProps={{
          list: "search",
        }}
      />
      <datalist id="search">
        {lastFiveQueries.length &&
          lastFiveQueries.map((item) => {
            return <option key={item} value={item} />;
          })}
      </datalist>
    </div>
  );
}

export default App;
