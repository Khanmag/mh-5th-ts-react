// const rootNode = document.getElementById("root"); // нахдим div с id = root

// rootNode.textContent = "ROOT";
// rootNode.innerText = "ROOT"
// rootNode.innerHTML = "ROOT"

// console.log(rootNode.textContent);
// console.log(rootNode.innerText);
// console.log(rootNode.innerHTML);

// const addUserToPage = (name, rootList) => {
//   // rootNode.textContent = rootNode.textContent + " " + name;
//   // // rootNode.textContent += " " + name;
//   const newUser = document.createElement("li");
//   newUser.textContent = name;
//   // rootNode.append(newUser);
//   rootList.append(newUser); // добавляем li в ul (rootList)
// };

// // addUserToPage("Anna");
// // addUserToPage("Bill");
// // addUserToPage("Clint");
// // addUserToPage("Den");

// const addUsersToPage = (userList) => {
//   const newUserList = document.createElement("ul");
//   userList.forEach((user) => {
//     addUserToPage(user, newUserList);
//   });
//   rootNode.append(newUserList); // добавляем ul в div c id root
// };

// // addUsersToPage(["Madina", "Olesya", "Sasha"])

// const getUsersList = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   // console.log(data);
//   // console.log([1, 2, 3, 4].map( (item, index, arr) => {
//   //   return item * 2
//   // }));
//   const correctArr = data.map((item) => {
//     return item.name;
//   });
//   console.log(correctArr);
//   addUsersToPage(correctArr);
// };

// getUsersList();

// Задание - создать функцию, которая добавить нумерованный список дел на день
// addTodoDaity(["Встать", "Позавтракать", "Поработать", "Поспать",])
// 1. Встать
// 2. Позавтракать
// 3. Поработать
// 4. Поспать

// const image = document.createElement("img");
// image.src =
//   "https://mirpozitiva.ru/wp-content/uploads/2019/11/1476889932_zakat-derevo.jpg";
// console.dir(image);
// rootNode.append(image);

// https://mirpozitiva.ru/wp-content/uploads/2019/11/1476889932_zakat-derevo.jpg

const arr = [
  "https://mirpozitiva.ru/wp-content/uploads/2019/11/1476889932_zakat-derevo.jpg",
  "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666389897_62-mykaleidoscope-ru-p-klassnaya-priroda-oboi-67.jpg",
  "https://www.w-dog.ru/wallpapers/11/2/528819469500993/kanada-joxo-ozero-les-gory-skaly-sneg.jpg",
];

// arr.forEach((item) => {
//   const image = document.createElement("img");
//   image.src = item;
//   image.className = "picture";
//   image.style.width = "100px";
//   rootNode.append(image);
// });

const addPhoto = (content, container) => {
  // < img />
  const image = document.createElement("img"); // image ==> < img />
  const div = document.createElement("div"); // div ==> < div />

  // ** DOM Document Object Model
  // console.dir(document);

  // < img src="..." />
  image.src = content.src;
  image.alt = content.alt;
  image.title = content.title;
  // image.style.width = "400px"
  div.className = "imageBox";

  // <div> < img src="..." /> </div>
  div.append(image);
  // <> <div> < img src="..." /> </div> </>
  container.append(div);
};

const addPhotosBox = (photosList) => {
  const rootNode = document.getElementById("root"); // нахдим div с id = root
  const imageContainer = document.createElement("section"); // <section />
  rootNode.append(imageContainer); // <div id="root"><section /></div>
  // Пробегаемся по массиву и для каждого элемента вызываем функцию addPhoto - те добавляем фото
  photosList.forEach((item) => {
    addPhoto(
      {
        src: item,
      },
      imageContainer
    );
  });
};

addPhotosBox(arr)
