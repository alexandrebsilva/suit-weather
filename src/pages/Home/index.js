import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as Location from "expo-location";
import WeatherApiService from "../../services/weather-service";

export default function Home() {
  const [forecastData, setForecastData] = useState({
    by: "default",
    valid_key: false,
    results: {
      temp: 25,
      date: "2021-03-16",
      time: "21:37",
      condition_code: "32",
      description: "Sunny",
      currently: "night",
      cid: "",
      city: "Miami, FL",
      img_id: "32n",
      humidity: 63,
      wind_speedy: "18 km/h",
      sunrise: "7:29 am",
      sunset: "7:30 pm",
      condition_slug: "clear_night",
      city_name: "Miami",
      forecast: [
        {
          date: "03-16",
          weekday: "Tue",
          max: 26,
          min: 22,
          description: "Day partly cloudy",
          condition: "cloudly_day",
        },
        {
          date: "03-17",
          weekday: "Wed",
          max: 28,
          min: 22,
          description: "Day partly cloudy",
          condition: "cloudly_day",
        },
        {
          date: "03-18",
          weekday: "Thu",
          max: 28,
          min: 23,
          description: "Thunderstorms",
          condition: "storm",
        },
        {
          date: "03-19",
          weekday: "Fri",
          max: 28,
          min: 21,
          description: "Thunderstorms",
          condition: "storm",
        },
        {
          date: "03-20",
          weekday: "Sat",
          max: 25,
          min: 15,
          description: "Fair day",
          condition: "cloudly_day",
        },
        {
          date: "03-21",
          weekday: "Sun",
          max: 25,
          min: 17,
          description: "Day partly cloudy",
          condition: "cloudly_day",
        },
        {
          date: "03-22",
          weekday: "Mon",
          max: 25,
          min: 16,
          description: "Fair day",
          condition: "cloudly_day",
        },
        {
          date: "03-23",
          weekday: "Tue",
          max: 26,
          min: 18,
          description: "Fair day",
          condition: "cloudly_day",
        },
        {
          date: "03-24",
          weekday: "Wed",
          max: 27,
          min: 20,
          description: "Fair day",
          condition: "cloudly_day",
        },
        {
          date: "03-25",
          weekday: "Thu",
          max: 27,
          min: 19,
          description: "Day partly cloudy",
          condition: "cloudly_day",
        },
      ],
    },
    execution_time: 0.0,
    from_cache: true,
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gradientColorsHeader, setGradientColorsHeader] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        setErrorMessage(
          "Permissão negada para acessar a localização do dispositivo"
        );
        setLoading(false);
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});

      try {
        const service = new WeatherApiService();
        const { data } = await service.getWeather(
          coords.latitude,
          coords.longitude
        );
        console.log(data.results);
        setForecastData(data);
        setLoading(false);
      } catch (error) {
        console.log("Erro na busca dos dados: \n" + error.message);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Menu></Menu>

      {!loading ? (
        <>
          <Header data={forecastData.results} />
          <Conditions data={forecastData.results} />
          <FlatList
            horizontal={true}
            contentContainerStyle={{ paddingBottom: "5%" }}
            style={styles.list}
            data={forecastData.results.forecast}
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => <Forecast data={item} />}
          />
        </>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8f0ff",
    paddingTop: "5%",
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
  },
});
