const userList = [
  {
    id: 1,
    name: `Sahil Sharma`,
    age: 23,
    username: `sahilS`,
    nationality: `INDIA`,
    friends: [
      {
        id: 2,
        name: `Rahul Singh`,
        age: 45,
        username: `rahuljhadav@1234`,
        nationality: `BRAZIL`,
      },
      {
        id: 3,
        name: `Raju Kumar`,
        age: 13,
        username: `raju123`,
        nationality: `CANADA`,
      },
    ],
  },
  {
    id: 2,
    name: `Rahul Singh`,
    age: 45,
    username: `rahuljhadav@1234`,
    nationality: `BRAZIL`,
  },
  {
    id: 3,
    name: `Raju Kumar`,
    age: 13,
    username: `raju123`,
    nationality: `CANADA`,
  },
  {
    id: 4,
    name: `Rohan Arora`,
    age: 33,
    username: `rohanadmn123`,
    nationality: `NEPAL`,
    friends: [
      {
        id: 3,
        name: `Raju Kumar`,
        age: 13,
        username: `raju123`,
        nationality: `CANADA`,
      },
    ],
  },
];

module.exports = { userList };
