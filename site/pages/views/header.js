import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";

export default function Header() {
  const [myOptions, setMyOptions] = useState([]);

  const getDataFromAPI = () => {
    console.log("Options Fetched from API");

    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          myOptions.push(res.data[i].employee_name);
        }
        setMyOptions(myOptions);
      });
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>2minutes2code</h1>
      <Autocomplete
        style={{ width: 300 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Rechercher"
          />
        )}
      />
    </header>
  );
}
