export function condition(condition) {
  switch (condition) {
    case "storm":
      return (icon = {
        name: "rainy-outline",
        color: "#1ec9ff",
      });
    case "clear_day":
      return (icon = {
        name: "partly-sunny-outline",
        color: "#ffb300",
      });
    case "rainy":
      return (icon = {
        name: "rainy-outline",
        color: "#1ec9ff",
      });
    case "rain":
      return (icon = {
        name: "rainy-outline",
        color: "#1ec9ff",
      });
    case "snow":
      return (icon = {
        name: "snow-outline",
        color: "#1ec9ff",
      });
    case "hail":
      return (icon = {
        name: "thunderstorm-outline",
        color: "#1ec9ff",
      });

    case "fog":
      return (icon = {
        name: "cloudy",
        color: "#1ec9ff",
      });
    default:
      return (icon = {
        name: "cloud-outline",
        color: "#1ec9ff",
      });
  }
}

export function getConditionSlug(slug) {
  const slugs = {
    storm: "Tempestade",
    snow: "Neve",
    hail: "Granizo",
    rain: "Chuva",
    fog: "Neblina",
    clear_day: "Dia limpo",
    clear_night: "Noite limpa",
    cloud: "Nublado",
    cloudly_day: "Nublado de dia",
    cloudly_night: "Nublado de noite",
    none_day: "Dia",
    none_night: "Noite",
  };
  return slugs[slug];
}
export function getBackgroundByPeriod(period) {
  const nightColors = ["#272de3", "#1b1f8f"];
  switch (period) {
    case "night":
      return { gradientColors: nightColors };
    case "noite":
      return { gradientColors: nightColors };
    default:
      return { gradientColors: ["#1ed6ff", "#97c1ff"] };
  }
}
