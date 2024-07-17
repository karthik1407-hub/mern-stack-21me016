
const api = {
    base: 'https://api.openweathermap.org/data/2.5/weather?',
    key: '4fc3bb72d1f2d6f641ae1d8e94091eb0'
}
 

const city = document.getElementById('city');
 

city.addEventListener('keypress', function(event){
    // console.log(event)
    if(event.key == 'Enter' ){
        getWeather(city.value);
    }
});
 

    function getWeather(city){
        fetch(`${api.base}q=${city}&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displaytemperature(data);
            displaycountry(data);
            displayweather(data);
            displaylocation(data);
            displaywind(data);
        });
    }
function displaytemperature(data){
    const temp = data.main.temp;
    document.getElementById('temp').innerText = `${temp}°C` ;
};
function displaylocation(data){
    const location = data.name;
    document.getElementById('location').innerText = location;
};
function displaycountry(data){
    const country = data.sys.country;
    document.getElementById('country').innerText = country;
};
function displayweather(data){
    const weather = data.weather[0].main;
    document.getElementById('weather').innerText =`It's ${weather}y`;
};
function displaywind(data){
    const wind = data.wind.speed;
    document.getElementById('wind').innerText = ` Wind Speed is ${wind}`;
};