async function getWeather(city: string) {
  const latLon = await getLatLon(city)
}

async function getLatLon(city: string) {
  const endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.OPEN_WEATHER_API_KEY}`
  const response = await fetch(endpoint)
  const data = await response.json()
  return {
    lat: data[0].lat,
    lon: data[0].lon,
  }
}