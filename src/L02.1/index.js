const rootNode = document.getElementById("root");

// rootNode.textContent = "ROOT";
// rootNode.innerText = "ROOT"
// rootNode.innerHTML = "ROOT"

// console.log(rootNode.textContent);
// console.log(rootNode.innerText);
// console.log(rootNode.innerHTML);

const addUserToPage = (name, rootList) => {
  // rootNode.textContent = rootNode.textContent + " " + name;
  // // rootNode.textContent += " " + name;
  const newUser = document.createElement("li");
  newUser.textContent = name;
  // rootNode.append(newUser);
  rootList.append(newUser); // добавляем li в ul (rootList)
};

// addUserToPage("Anna");
// addUserToPage("Bill");
// addUserToPage("Clint");
// addUserToPage("Den");

const addUsersToPage = (userList) => {
  const newUserList = document.createElement("ul");
  userList.forEach( user => {
    addUserToPage(user, newUserList)
  })
  rootNode.append(newUserList) // добавляем ul в div c id root
}

addUsersToPage(["Madina", "Olesya", "Sasha"])
