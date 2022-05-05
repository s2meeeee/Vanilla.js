const API_KEY ="f61f5057bbaa8fb1e0ab1cb3e48f1d85";

function onGetOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)//fetch라는걸 이용해 javascript가 직접 url을 부를수있도록 설정한것
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
    
}
function onGetError(){
    alert("can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGetOk,onGetError);//get currentposition함수는 두개의 argument가 필요하다 
                                            //1.모든게 잘 되엇을때 실행되는 함수 2.error가 났을때 실행되는 함수