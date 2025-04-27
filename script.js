document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const fetchWeatherButton = document.getElementById('fetchWeather');
    const weatherDataDiv = document.getElementById('weatherData');
    const apiKey = '667971076cc534cec10b7fa11dcb8f48';

    fetchWeatherButton.addEventListener('click', () => {
        const city = cityInput.value.trim();

        if (city === '') {
            weatherDataDiv.textContent = 'Будь ласка, введіть назву міста.';
            return;
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP помилка! статус: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                weatherDataDiv.innerHTML = `
                    <h3>Погода в місті ${city}</h3>
                    <p>Температура: ${temperature}°C</p>
                    <p>Вологість: ${humidity}%</p>
                    <p>Швидкість вітру: ${windSpeed} м/с</p>
                `;
            })
            .catch(error => {
                console.error('Помилка отримання даних про погоду:', error);
                weatherDataDiv.textContent = `Не вдалося отримати дані про погоду для міста "${city}". Перевірте назву міста та підключення до Інтернету.`;
            });
    });
});