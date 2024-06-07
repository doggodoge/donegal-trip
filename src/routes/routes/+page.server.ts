import type { PageServerLoad } from './$types';

export const prerender = false;

const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;

type WeatherData = {
  coord: {
    lon: number; // Longitude of the location
    lat: number; // Latitude of the location
  };
  weather: Array<{
    id: number; // Weather condition id
    main: string; // Group of weather parameters (Rain, Snow, Clouds etc.)
    description: string; // Weather condition within the group
    icon: string; // Weather icon id
  }>;
  base: string; // Internal parameter
  main: {
    temp: number; // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
    feels_like: number; // Temperature. This temperature parameter accounts for the human perception of weather.
    pressure: number; // Atmospheric pressure on the sea level, hPa
    humidity: number; // Humidity, %
    temp_min: number; // Minimum temperature at the moment.
    temp_max: number; // Maximum temperature at the moment.
    sea_level?: number; // Atmospheric pressure on the sea level, hPa (optional)
    grnd_level?: number; // Atmospheric pressure on the ground level, hPa (optional)
  };
  visibility: number; // Visibility, meter. The maximum value of the visibility is 10km
  wind: {
    speed: number; // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
    deg: number; // Wind direction, degrees (meteorological)
    gust?: number; // Wind gust (optional)
  };
  clouds: {
    all: number; // Cloudiness, %
  };
  rain?: {
    '1h'?: number; // Rain volume for the last 1 hour, mm (optional)
    '3h'?: number; // Rain volume for the last 3 hours, mm (optional)
  };
  snow?: {
    '1h'?: number; // Snow volume for the last 1 hour, mm (optional)
    '3h'?: number; // Snow volume for the last 3 hours, mm (optional)
  };
  dt: number; // Time of data calculation, unix, UTC
  sys: {
    type: number; // Internal parameter
    id: number; // Internal parameter
    message: number; // Internal parameter
    country: string; // Country code (GB, JP etc.)
    sunrise: number; // Sunrise time, unix, UTC
    sunset: number; // Sunset time, unix, UTC
  };
  timezone: number; // Shift in seconds from UTC
  id: number; // City ID
  name: string; // City name
  cod: number; // Internal parameter
};

const formatWeatherData = (city: string, data: WeatherData | null) => {
  if (!data) return 'Weather data not available';

  const {
    main: { temp, humidity },
    weather,
    wind: { speed },
  } = data;
  const tempCelsius = (temp - 273.15).toPrecision(3);
  const windSpeedKmh = (speed * 3.6).toPrecision(3);

  return `${city.split(', ')[0]}: ${tempCelsius}°C, ${weather[0].description}, ${windSpeedKmh} km/h, Humidity ${humidity}%`;
};

const fetchWeather = async (city: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}`,
      {
        headers: {
          'Cache-Control': 'max-age=600, public, stale-while-revalidate',
        },
      }
    );
    const data: WeatherData = await response.json();
    return formatWeatherData(city, data);
  } catch (error) {
    console.error(`Error fetching weather for ${city}:`, error);
    return formatWeatherData(city, null);
  }
};

export const load: PageServerLoad = async () => {
  const weatherPromises = ['Belfast, GB', 'Derry, GB', 'Malin, IE'].map(fetchWeather);
  const currentWeather = await Promise.all(weatherPromises);

  return { currentWeather };
};
