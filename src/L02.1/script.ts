const rootNode: HTMLElement | null = document.getElementById("root");

type PersonType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
  };
  geo: {
    lat: number;
    lng: number;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const addUserToList = (text: string, rootList: HTMLElement) => {
  const newUser = document.createElement("li");
  newUser.textContent = text;
  rootList.append(newUser);
};

const addUsersListToPage = (dataArr: PersonType[]) => {
  const newUserList = document.createElement("ul");
  dataArr.forEach((item) => {
    const text = item.name + `, (${item.username})`;
    addUserToList(text, newUserList);
  });
  if (rootNode) rootNode.append(newUserList); // добавляем ul в div c id root
};

const fetchUsersList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: PersonType[] = await response.json();
  addUsersListToPage(data);
};
fetchUsersList();
