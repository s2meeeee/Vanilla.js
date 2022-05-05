
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");


// function handleLoginBtnClick(){
//     const username = loginInput.value;

//     if(username === ""){
//         alert("please write your name");
//     }else if(username.length > 15){
//         alert("your name is too long");
//     }
// }



// loginButton.addEventListener("click",handleLoginBtnClick);


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();//기본으로 내장되어있는 동작을 멈춰줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    // greeting.innerText = "hello " + username;
    paintGreeting(username);
    
}

function paintGreeting(username){
    greeting.innerText = `hello ${username}`;
    // `function 함수이름(argument) `에 들어가는 argument는
    //이전에 정의한 변수명과는 아무 상관이 없습니다!
    //저기에 `username`을 썼다고 해서 위에서 정의한 
    //`const username`이 들어가는 것이 아닙니다. 
    //헷갈리시면 `function paintGreeting(tomato) 
    //{ greeting.innerText = `Hello ${tomato}`; }`
    //라고 쓰고 테스트해보세요. 함수 뒤의 (괄호) 안에 들어가는 것은
    //그 함수 안에서 사용할 변수의 이름을 임의로 지어주는 것 뿐입니다.
    //그래서 `function paintGreeting(username)`에서 함수가 받아오는 
    //argument 이름을 `username`으로 정했으니
    //greeting.innerText = ... {username};이 되는 겁니다.

    //함수 파라미터 변수 명 다르게 해도 괜찮아요
    //어차피 그 파라미터 변수는 함수 내부에서만 작동하는 local variable 이에요.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //form을 보여준다.
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //h1을 보여준다.
    paintGreeting(savedUsername);
}

// const link = document.querySelector("a");

// function handleLinkClick(event){
//     console.log(event)
//     event.preventDefault();
//     console.log(event)
// }

// link.addEventListener("click", handleLinkClick);
