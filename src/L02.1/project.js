const images = [
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
for (const item of images) {
  const image = document.createElement("img");
  image.src = item;
  root.append(image);
}
