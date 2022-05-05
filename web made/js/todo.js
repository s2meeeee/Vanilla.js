const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];//localstorage에 들어잇는 값을 업데이트 해주기위해 const->let으로 바꿔줌


function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//json.stringity는 javascript의 string이나 array를 string으로 바꿔주는 브라우저의 기능이다.
}

function deleteToDo(event){
    const li = event.target.parentElement;
                    //target은 클릭된 html의 element이다.
                        //parentElement는 이벤트를 눌렀을때 누구가 부모인 태그를 누른건지 알수있지
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));//todo.id는 숫자이고 li.id는 문자이기 때문에 parsInt를 이용해 문자를 숫자로 바꿔줌
    //todos안에 있는 값의 아이디와 click 이벤트가 실행된 아이디의 값과 다르면 새 array로 나오게 한다. 같을경우 false가 되므로 나오지않는다 filter는 true만 새 array로 나오게 함
    li.remove();
    saveToDos();
}
//화살표함수를 다르게 표현하는 방법
// function isNotSameId(toDo,li) {
//     return toDo.id !== parseInt(li.id);
//     }

// function deleteToDo(event){
//     const li = event.target.parentElement;
//     toDos = toDos.filter(todo => isNotSameId(todo,li));
//     saveStorageToDos();
//     li.remove();
    // }


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;//paintToDo 함수는 newTodo 라는 이름의 인수의 값으로 newTodoObj 라는 object를 받고있기 때문에 함수 안에서 newTodo.id를 쓰고있는 겁니다 
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);//li안에 자식으로 span을 넣을때 사용하는 태그 li가 부모가 됌
    li.appendChild(button);
    toDoList.appendChild(li);//ul안에 li가 들어감
}//todo를 그리는 역활을 담당


function handToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";//toDoInput.value값을 비웠다고해서 비워지는것이 아님
                        //변수newTodo에 값을 복사해놨기때문에 다음에 todoInput.value로 뭘 해도 영향을 주지않음
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    
    toDos.push(newTodoObj);//localstorage는 텍스트만 저장할수있다.
    paintToDo(newTodoObj); // newtodo에 들어있는 입력값을
                        //paintTodo에 넣어서 paintTodo라는 새로운 function으로 값을 보낸다.
    saveToDos();//함수기능을 정의 화면에 나오는 텍스트를 저장하기 위해
}

toDoForm.addEventListener("submit",handToDoSubmit);
//자바스크립트는 todoform에 submit에 발생한 이벤트를 handToDoSubmit 함수의 첫번째 인자로 준다!

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}









