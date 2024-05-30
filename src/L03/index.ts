type UserType = {
  login: string;
  pass: number;
};
type AdditionalSellersType = {
  proceeds: number;
};
const seller1: UserType & AdditionalSellersType = {
  login: "3123",
  pass: 41213,
  proceeds: 23423,
};

interface IUser {
  login: string;
  pass: number;
}
interface ISeller extends IUser {
  proceeds: number;
}

interface IRegularSeller extends ISeller {
  sale: number;
}

const seller1: ISeller = {
  login: "3123",
  pass: 41213,
  proceeds: 23423,
};
