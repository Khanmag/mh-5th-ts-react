const imagesList = [
  "../assets/memoryGame/cards/1.png",
  "../assets/memoryGame/cards/2.png",
  "../assets/memoryGame/cards/3.png",
  "../assets/memoryGame/cards/4.png",
  "../assets/memoryGame/cards/5.png",
  "../assets/memoryGame/cards/6.png",
  "../assets/memoryGame/cards/7.png",
  "../assets/memoryGame/cards/8.png",
  "../assets/memoryGame/cards/9.png",
  "../assets/memoryGame/cards/10.png",
  "../assets/memoryGame/cards/11.png",
  "../assets/memoryGame/cards/12.png",
  "../assets/memoryGame/cards/13.png",
  "../assets/memoryGame/cards/14.png",
  "../assets/memoryGame/cards/15.png",
  "../assets/memoryGame/cards/16.png",
  "../assets/memoryGame/cards/17.png",
  "../assets/memoryGame/cards/18.png",
];

const root = document.getElementById("root");

const memoryGame = {
  gameLauncher: "",
  launchGame() {
    const startButton = document.createElement("button");
    startButton.textContent = "Начать игру";
    startButton.onclick = () => {
      this.startGame();
      startButton.remove();
    };
    root.append(startButton);
  },
  startGame() {
    const gameTitle = document.createElement("h1");
    gameTitle.textContent = "MEMORY GAME";

    const gameBox = document.createElement("section");
    gameBox.className = "gameBox";
    for (const item of imagesList.slice(0, 6)) {
      const imageBox = document.createElement("div");
      imageBox.classList.add("imageBox");
      const image = document.createElement("img");
      image.src = item;
      imageBox.append(image);
      gameBox.append(imageBox);
    }
    root.append(gameTitle, gameBox);
  },
};
memoryGame.launchGame();
