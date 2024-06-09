# New project using react 

A simple weather application built with React and Material-UI, which allows users to search for current weather information by city name.

## Features

- Search for current weather information by city name
- Display temperature, humidity, weather conditions, and more
- Dynamic background images and icons based on weather conditions
- Error handling for invalid city names


## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Material-UI**: React components for faster and easier web development
- **OpenWeatherMap API**: Provides weather data
- **CSS**: Styling for the application

## Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Get your OpenWeatherMap API key**:

    Sign up at [OpenWeatherMap](https://openweathermap.org/) to get a free API key.

4. **Create a `.env` file in the root directory and add your API key**:

    ```env
    REACT_APP_WEATHER_API_KEY=your_api_key_here
    ```

## Usage

1. **Start the development server**:

    ```sh
    npm run dev
    ```

2. **Open your browser and navigate to** `http://localhost:3000`

3. **Search for a city's weather**:

    - Enter the city name in the search box
    - Click the "Search" button
    - View the weather information displayed
