import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function displayText() {
  //write your code here

  let programadores = [
    {
      id: 1,
      name: "Robert Tovar",
      email: "roberttovarv@gmail.com",
      imageUrl: "https://avatars.githubusercontent.com/u/155775143?v=4",
      website: "https://github.com/Roberttovarv/roberttovarv"
    },
    {
      id: 2,
      name: "Hector Chocobar",
      email: "hector@chocobar.net",
      imageUrl: "https://avatars.githubusercontent.com/u/45291267?v=4",
      website: "https://github.com/hchocobar"
    },
    {
      id: 3,
      name: "Matias Kamelman",
      email: "kamelmat@gmail.com",
      imageUrl: "https://avatars.githubusercontent.com/u/125071787?v=4",
      website: "https://github.com/kamelmat"
    },
    {
      id: 4,
      name: "Mar Aguayo",
      email: "mar.aguayo15@gmail.com",
      imageUrl: "https://avatars.githubusercontent.com/u/154342626?v=4",
      website: "https://github.com/magufl"
    },
    {
      id: 5,
      name: "Marco Luque",
      email: "marcoluqueh@gmail.com",
      imageUrl: "https://avatars.githubusercontent.com/u/101642586?v=4",
      website: "https://github.com/marcoluqueh"
    }
  ];
  let randomProg = programadores[Math.floor(Math.random() * programadores.length)];

  let cardHTML = programadores.map((item, id) => `
    <div key="${id}" class="card" style="width: 18rem;">
      <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.email}</p>
        <p class="card-text">${item.website}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  `).join('');

  const cardProgramadores = document.querySelector("#todosProg");
  cardProgramadores.innerHTML = cardHTML;
};