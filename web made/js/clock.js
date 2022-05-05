const clock = document.querySelector("h2#clock");

function getClock(){
    
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();//ㅂ보이게만 만들수있음 그당시의 시ㄴ
setInterval(getClock, 1000);//반복작업으로 실시간을 볼 수 있다.

// setTimeout(sayHello, 5000);

