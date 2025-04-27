document.addEventListener('DOMContentLoaded', () => {
    const fetchWeatherButton = document.getElementById('fetchWeather');
    const weatherDataDiv = document.getElementById('weatherData');
    const apiKey = '667971076cc534cec10b7fa11dcb8f48'; // Замініть на свій реальний API ключ

    fetchWeatherButton.addEventListener('click', () => {
        const city = 'Kyiv';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Додано &units=metric для отримання температури в градусах Цельсія

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
                    <p>Температура: ${temperature}°C</p>
                    <p>Вологість: ${humidity}%</p>
                    <p>Швидкість вітру: ${windSpeed} м/с</p>
                `;
            })
            .catch(error => {
                console.error('Помилка отримання даних про погоду:', error);
                weatherDataDiv.textContent = 'Не вдалося отримати дані про погоду.';
            });
    });
});