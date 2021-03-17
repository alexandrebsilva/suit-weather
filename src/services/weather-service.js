import axios from "axios";

class WeatherApiService {
  api = axios.create({ baseURL: "https://api.hgbrasil.com" });
  async getWeather(lat, lon) {
    return this.api.get(
      `/weather?key=${process.env.apiKey}&lat=${lat}&lon=${lon}`
    );
  }
}

export default WeatherApiService;
