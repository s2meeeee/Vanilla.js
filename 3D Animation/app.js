//Movement Animation to happen
const container = document.querySelector(".container");
const card = document.querySelector(".card");

//items
const item = document.querySelector(".item img");
const title = document.querySelector(".title");
const description = document.querySelector(".info h3");
const options = document.querySelector(".options");
const purchase = document.querySelector(".purchase button");

// Moving Animation Event
container.addEventListener("mousemove", (event) => {
  console.log(event.pageX, event.pageY);
  let xAxis = (window.innerWidth / 2 - event.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 20;

  card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

//Animate in
container.addEventListener("mouseenter", (event) => {
  card.style.transition = "none";

  //Popout (튀어나오다.)
  item.style.transform = "translateZ(150px) rotateZ(-35deg)";
  title.style.transform = "translateZ(125px)";
  description.style.transform = "translateZ(100px)";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all .3s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  // Popback
  item.style.transform = "translateZ(0px) rotateZ(0)";
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
});

// // Animate In
// container.addEventListener("mouseenter", (e) => {
//   card.style.transition = "none";

//   // Popout
//   title.style.transform = "translateZ(150px)";
//   item.style.transform = "translateZ(200px) rotateZ(-45deg)";
//   description.style.transform = "translateZ(125px)";
//   options.style.transform = "translateZ(100px)";
//   purchase.style.transform = "translateZ(75px)";
// });

// // Animate Out
// container.addEventListener("mouseleave", (e) => {
//   card.style.transition = "all .3s ease";
//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;

//   // Popback
//   title.style.transform = "translateZ(0px)";
//   item.style.transform = "translateZ(0px) rotateZ(0)";
//   description.style.transform = "translateZ(0px)";
//   options.style.transform = "translateZ(0px)";
//   purchase.style.transform = "translateZ(0px)";
// });
