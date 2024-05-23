type bigObj2Type = {
  name: string;
  age: number | null;
  address: {
    city: "Moscow" | "Saint-Petersburg";
    street: string;
    house: number;
    floor?: number;
  };
  orders: [number, number][];
  getAddress: () => string;
};

const bigObj2: bigObj2Type = {
  name: "Anna",
  age: 37,
  address: {
    city: "Moscow",
    street: "Arbat",
    house: 1,
    floor: 5,
  },
  orders: [
    [100200301, 1],
    [100232577, 5],
  ],
  getAddress() {
    return `${this.address.city}, ${this.address.street}, ${this.address.house}`;
  },
};
console.log(bigObj2);
