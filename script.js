const apiKey = "d760542de0685f19b993573ed1dc3175";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod == 200) {
      const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>☁️ Condition: ${data.weather[0].description}</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
      // Move this inside the 'if' block
      document.getElementById("weatherResult").innerHTML = weatherHTML;
    } else {
      document.getElementById("weatherResult").innerHTML = `<p>City not found.</p>`;
    }
  } catch (error) {
    console.error(error);
    document.getElementById("weatherResult").innerHTML = `<p>Error fetching data!</p>`;
  }
}
