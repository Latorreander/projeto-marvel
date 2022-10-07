

const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    const idSelected = character.attributes.id.value;

    if (idSelected === "ultron") return;

    const characterSelected = document.querySelector(".selected");
    characterSelected.classList.remove("selected");

    character.classList.add("selected");

    const bigImagePlayer1 = document.getElementById("character-player-1");

    bigImagePlayer1.src = `./src/images/${idSelected}.png`;

    const player1Name = character.getAttribute("data-name");

    const nameBigImage = document.getElementById("name");

    nameBigImage.innerHTML = player1Name;
  });
});
