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
const shuffledImages = [...imagesList.slice(0, 3), ...imagesList.slice(0, 3)];
function shuffle(array) {
  let currentIndex = array.length;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
shuffle(shuffledImages);

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
  // toggleCard.bind(memoryGame) - чтобы дать this = memoryGame
  statusBox: null,
  openedCardsList: [],
  currentCardsList: [],
  toggleCard(node) {
    if (node.classList.contains("openedImageBox")) {
      node.classList.remove("openedImageBox");
      node.classList.add("closedImageBox");
      this.currentCardsList = this.currentCardsList.filter(
        (item) => item.id !== node.id
      );
    } else {
      node.classList.remove("closedImageBox");
      node.classList.add("openedImageBox");
      this.currentCardsList.push(node);
    }
  },
  checkIsImagesSame() {
    const image1 = this.currentCardsList[0].children[0].src;
    const image2 = this.currentCardsList[1].children[0].src;
    const isImageSame = image1 === image2;
    if (isImageSame) {
      this.openedCardsList = [
        ...this.openedCardsList,
        ...this.currentCardsList,
      ];
      this.currentCardsList = [];
      if (this.openedCardsList.length === shuffledImages.length) {
        const congratulation = document.createElement("h2");
        congratulation.textContent = "Вы победили";
        const newGameButton = document.createElement("button");
        newGameButton.textContent = "Новая игра";
        newGameButton.onclick = () => {
          window.location.reload();
        };
        this.statusBox.append(congratulation, newGameButton);
      }
    } else {
      setTimeout(() => {
        this.currentCardsList.forEach((item) => this.toggleCard(item));
        this.currentCardsList = [];
      }, 1500);
    }
  },
  startGame() {
    const gameTitle = document.createElement("h1");
    gameTitle.textContent = "MEMORY GAME";
    const gameStatusBox = document.createElement("div");
    // gameStatusBox.id  = "gameStatusBox"
    this.statusBox = gameStatusBox;

    const gameBox = document.createElement("section");
    gameBox.className = "gameBox";

    for (const item of shuffledImages) {
      const imageBox = document.createElement("div");
      imageBox.classList.add("imageBox");
      imageBox.classList.add("closedImageBox");
      imageBox.id = item + Math.random();
      imageBox.onclick = () => {
        const openedCount = this.currentCardsList.length;
        if (openedCount === 0) {
          this.toggleCard(imageBox);
        }
        if (openedCount === 1) {
          this.toggleCard(imageBox);
          this.checkIsImagesSame();
        }
      };
      const image = document.createElement("img");
      image.src = item;
      imageBox.append(image);
      gameBox.append(imageBox);
    }
    root.append(gameTitle, gameStatusBox, gameBox);
  },
};
memoryGame.launchGame();
