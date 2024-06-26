import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function displayText() {
  let programmers = [
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
  let randomProgrammers = programmers[Math.floor(Math.random() * programmers.length)];

  let cardHTML = `
    <div class="card pt-1" style="width: 18rem;">
      <img src="${randomProgrammers.imageUrl}" class="card-img-top" alt="${randomProgrammers.name}">
      <div class="card-body">
        <h5 class="card-title">${randomProgrammers.name}</h5>
        <p class="card-text">${randomProgrammers.email}</p>
        <p class="card-text"><a href="${randomProgrammers.website}" target="_blank">Sitio Web</a></p>
        <a href="#" class="btn btn-primary m-2" onclick="window.location.reload();">Conocer a otro</a><a href="src/programmers.html" class="btn btn-primary">Ver todos</a>
      </div>
    </div>
  `;

  const cardprogrammers = document.querySelector("#card");
  cardprogrammers.innerHTML = cardHTML;

};
