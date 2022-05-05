
//javascript를 사용하여 html에 코드를 추가하기
const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];
//내가 저장한 img이름과 javascript에 사용하는 이미지이름이 같아야한다.
const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");
//createElement로 element를 우선 생성해준다. 아직은 가지고있는 형태가 없다.
bgImages.src = `img/${chosenImages}`;
//javascript로 src를 만들어줄수있는데 사용한 폴더의 이름과 가져올 네임이름이 같아야한다.

document.body.appendChild(bgImages);
//appendchild로 코드를 html에 코드를 추가해준다.

