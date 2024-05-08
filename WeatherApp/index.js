const express = require("express");
const axios = require("axios");
const hbs = require("hbs");
const app = express();
const PORT = 3000;
require("dotenv").config();

app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static("public"));

// Функція для отримання погоди з OpenWeatherMap API
async function getWeather(city) {
    try {
        const apiKey = process.env.API_KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // URL для отримання погоди
        const response = await axios.get(url);
        const data = response.data;
        const weather = { // Об'єкт з погодними даними
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
        };
        return weather;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

// Масив міст для відображення на головній сторінці
app.get("/", (req, res) => {
    const cities = ["Lviv", "Ternopil", "Odesa", "Kyiv", "Cherkasy", "Obukhiv"];
    res.render("index", { cities }); // Рендеринг шаблону index.hbs та передача змінних
});

// Маршрут для відображення погоди для вказаного міста
app.get("/weather/:city", async (req, res) => {
    const city = req.params.city; // Отримання назви міста з URL
    try {
        const weather = await getWeather(city); // Отримання погодних даних для вказаного міста
        console.log(weather);
        res.render("weather", { weather }); // Рендеринг шаблону weather.hbs та передача змінних
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
