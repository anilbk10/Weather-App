import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setcity] = useState("");
  let [error, seterror] = useState(false);

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7532e1218e15b243460aad90af9831c9&units=metric`;

  let getWeatherInfo = async () => {
    try {
      seterror(false);
      let response = await fetch(API_URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        min_temp: jsonResponse.main.temp_min,
        max_temp: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handelChange = (event) => {
    setcity(event.target.value);
  };

  let handelSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setcity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
    } catch (err) {
      seterror(true);
    }
  };
  return (
    <div className="searchBox">
      <h1>Search for weather</h1>
      <form onSubmit={handelSubmit}>
        <TextField
          id="outlined-basic"
          label="City name"
          variant="outlined"
          required
          value={city}
          onChange={handelChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          search
        </Button>
        {error && (
          <h3 style={{ color: "red" }}> cannot find detials for this place</h3>
        )}
      </form>
    </div>
  );
}
