const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const buttonDx = document.getElementById("destra");
const buttonSx = document.getElementById("sinistra");
const items = document.getElementsByClassName("item");

let i = 0;

buttonDx.addEventListener("click", () => {
        items[i].classList.remove("active");
        i++;
        if(i >= items.length){
            i = 0;
        }
        items[i].classList.add("active");
});


buttonSx.addEventListener("click", () => {
        items[i].classList.remove("active");
        i--;
        if(i < 0){
            i = items.length - 1;
        }
        items[i].classList.add("active");
});



// let index = 0;

// buttonDx.addEventListener("click", () => {
//   // trovo chi ha class active e lo rimuovo
//   document.querySelector(".item.active").classList.remove("active");

//   // trovo la nuova img
//   index++;

//   // associo active alla seconda img
//   items[index].classList.add("active");
// });

// buttonSx.addEventListener("click", () => {
//   // trovo chi ha class active e lo rimuovo
//   document.querySelector(".item.active").classList.remove("active");

//   // trovo la nuova img
//   index--;

//   // associo active alla seconda img
//   items[index].classList.add("active");
// });
