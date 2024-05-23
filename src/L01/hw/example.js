var bigObj2 = {
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
    getAddress: function () {
        return "".concat(this.address.city, ", ").concat(this.address.street, ", ").concat(this.address.house);
    },
};
console.log(bigObj2);
