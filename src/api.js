const apiKey = "&APPID=e027ff558bf5bf1e94c43dc79604934e";

export const getWeatherData = async city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric${apiKey}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not find ${city}. Received ${res.status} error`);
  }

  // return fetch(url).then(response => response.json());
  const body = await res.json();

  const { id, name, main, weather } = body;
  const { temp } = main;
  const [{ main: condition }] = weather;

  return {
    id,
    name,
    temp: Math.round(temp),
    condition
  };
};
