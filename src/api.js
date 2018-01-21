const apiKey = '&APPID=e027ff558bf5bf1e94c43dc79604934e';

const getWeather = city => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric${apiKey}`;

  return fetch(url).then(response => response.json());
};

export default getWeather;
