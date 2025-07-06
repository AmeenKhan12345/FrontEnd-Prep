const apiKey = "28eba856eeadfa2ac9e9d45fd43fff5d"; // Your real key
const body = document.body;
const toggleBtn = document.getElementById("toggleModeBtn");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

document.getElementById("getWeatherBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  const display = document.getElementById("weatherDisplay");

  if (!city) {
    display.innerHTML = "⚠️ Please enter a city name!";
    return;
  }

  display.innerHTML = "⏳ Fetching weather...";

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // For debugging

    if (data.cod !== 200) {
      display.innerHTML = `❌ City not found: ${city}`;
      return;
    }

    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const condition = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    display.innerHTML = `
      <img src="${iconURL}" id="icon" alt="${condition}"><br>
      📍 <b>${data.name}</b><br>
      🌡️ Temperature: ${temp}°C<br>
      🤗 Feels Like: ${feelsLike}°C<br>
      ⛅ Condition: ${condition}
    `;
  } catch (error) {
    display.innerHTML = "⚠️ Error fetching weather data.";
    console.error("API Error:", error);
  }
});
