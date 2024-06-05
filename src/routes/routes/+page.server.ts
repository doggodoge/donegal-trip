import type { PageServerLoad } from './$types';

export const prerender = false;

const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;

const coords: Record<string, { lat: string; lon: string }> = {
  belfast: {
    lat: '54.607868',
    lon: '-5.926437',
  },
  derry: {
    lat: '54.995800',
    lon: '-7.307400',
  },
  sleivebawn: {
    lat: '55.3685806',
    lon: '-7.3369825',
  },
};

type WeatherData = {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
  wind: {
    speed: number;
  };
};

function formatWeatherData(data: WeatherData) {
  if (!data) {
    return 'Invalid weather data';
  }

  const city = data.name;
  const tempKelvin = data.main.temp;
  const tempCelcius = tempKelvin - 273.15;
  const conditions = data.weather[0].description;
  const windSpeedMps = data.wind.speed;
  const windSpeedKmh = windSpeedMps * 3.6;
  const humidity = data.main.humidity;

  return `${city}: ${tempCelcius.toPrecision(3)}°C, ${conditions}, ${windSpeedKmh.toPrecision(3)} km/h, Humidity ${humidity}%`;
}

async function fetchAll(
  coords: Array<{ lat: string; lon: string }>
): Promise<string[]> {
  let coordsPromises = [];
  for (const coord of coords) {
    coordsPromises.push(
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${WEATHER_KEY}`
      )
    );
  }
  const data = await Promise.all(coordsPromises);

  let jsonPromises = [];
  for (const coord of data) {
    jsonPromises.push(coord.json());
  }
  const coordJson = await Promise.all(jsonPromises);

  return coordJson.map(formatWeatherData);
}

export const load: PageServerLoad = async ({ params }) => {
  return {
    currentWeather: await fetchAll(Object.values(coords)),
  };
};
