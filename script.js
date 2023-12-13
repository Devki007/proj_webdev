// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7eb8044f7bmsh068e27ef9131e3cp10b8b5jsnd196c8e6d091',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
// // console.log('hello')
// async function checkweather(){
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
//     console.log(result);
//     document.querySelector(hi)
// 	console.log(result.temp);

// } catch (error) {
// 	console.error(error);
// }
// }
// checkweather();
// const element = document.querySelector(button);
//     element.style.visibility=visibal;

    document.getElementById("weatherForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // document.getElementsByClassName("x").classList.remove("hidden");
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    var city='delhi';
    var city = document.getElementById("city").value;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`
    fetch(url,options)
    .then(response => response.json())
      .then(data => {
        console.log(data);
        // document.getElementById("cityName").textContent = city;
        document.getElementById("temp").textContent = `RealFeel: ${data.feels_like}°C`;
        document.getElementById("maxtemp").textContent = `Max Temprature: ${data.max_temp}°C`;
        document.getElementById("mintemp").textContent = `Min Temperature: ${data.min_temp}°C`;
        document.getElementById("cld").textContent = `Cloud: ${data.cloud_pct}`;
        document.getElementById("sunr").textContent = `Sun Rise: ${data.sunrise*1000}`;
        document.getElementById("suns").textContent = `Sun Set: ${data.sunset}`;
        document.getElementById("humid").textContent = `Humidity : ${data.humidity} RH`;
        document.getElementById("windspeed").textContent = `Wind Speed: ${data.wind_speed} Km/h`;
        document.getElementById("winddigr").textContent = `wind Direction: ${data.wind_degrees}°`;
        // document.getElementsByClassName("result").classList.remove("hide");
        var element = document.querySelector('.hai');
        element.hidden = false;
    
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
        alert(`there is no data for ${city}`);
      });
    });
  
  

