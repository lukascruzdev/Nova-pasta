document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '87ca667ba1addcdcb7cc7fd1562cea03';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').innerText = `Cidade: ${data.name}`;
                document.getElementById('temperature').innerText = `Temperatura: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Descrição: ${data.weather[0].description}`;
                document.getElementById('weatherResult').style.display = 'block';
            } else {
                alert('Cidade não encontrada');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao buscar a previsão do tempo');
        });
});
