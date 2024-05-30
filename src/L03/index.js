const Arsenii = {
  pass: "12345",
  isCorrectPass: (v) => v === this.pass,
};

const getPass = () => {
  const userValue = prompt("введите пароль");
  console.log(Arsenii.pass);
  console.log(Arsenii.pass === userValue); // NOOOO
  // console.log(Arsenii.isCorrectPass(userValue));  // true || false
};

getPass();
