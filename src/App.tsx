import moment from "moment";
import "./App.css";
import { useEffect } from "react";

function App() {
  const time = moment().format("LT");
  const date = moment().format("LL");

  useEffect(() => {
    const weather = fetch(
      "https://api.weather.gov/gridpoints/BTV/114,51/forecast"
    )
      .then((res) => res.json())
      .then((data) => {
        const { properties } = data;
        const { periods } = properties;
        const {
          detailedForecast,
          probabilityOfPrecipitation,
          shortForecast,
          temperature,
        } = periods[0];
        console.log({
          detailedForecast,
          probabilityOfPrecipitation,
          shortForecast,
          temperature,
        });
        return {
          detailedForecast,
          probabilityOfPrecipitation,
          shortForecast,
          temperature,
        };
      });

    console.log(weather);
  }, []);
  return (
    <>
      <div className="background"></div>
      <div className="background"></div>
      <div className="background"></div>
      <div className="background"></div>
      <h1 id="title" className="animate-fade">
        Train Clock
      </h1>
      <div id="clock" className="text-8xl absolute right-12 bottom-24">
        {time}
      </div>

      <div
        id="date"
        className="text-4xl absolute right-12 bottom-16 flex flex-row flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
          />
        </svg>

        <span className="ml-4">{date}</span>
      </div>
    </>
  );
}

export default App;
