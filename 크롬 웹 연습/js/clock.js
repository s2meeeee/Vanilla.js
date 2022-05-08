const clock = document.querySelector("#clock");


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    //padstart를 준 이유는 01,02과 같이 두자리 수로 시간을 나타내기 위해서이고 padstert는 두개의 인자를 갖는데 하나는 문자열의 수와 그 수의 적합하지 못했을때 넣을 문자이다.
    //badstart가 문자열이기에 date object변수들을 string으로 감싸서 문자로 만들어준것이다.
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
getClock();//setinterval함수로도 실시간을 나오게할수있지만 1000초뒤에 function이 실행되기때문에 미리 브라워저에 getclock을 불러서 보여준뒤 실행시키는 것이다.
setInterval(getClock,1000);