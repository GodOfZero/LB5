const apiKey = 'ТВОЯ_API_КЛЮЧ'; // заміни на свій справжній API ключ
const city = 'Kyiv'; // <-- тепер Київ
const button = document.getElementById('getWeatherBtn');
const weatherDiv = document.getElementById('weatherInfo');

button.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка при завантаженні даних');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            weatherDiv.innerHTML = `
        <p><strong>Температура:</strong> ${temperature}°C</p>
        <p><strong>Вологість:</strong> ${humidity}%</p>
        <p><strong>Швидкість вітру:</strong> ${windSpeed} м/с</p>
      `;
        })
        .catch(error => {
            weatherDiv.innerHTML = `<p>Сталася помилка: ${error.message}</p>`;
        });
});
