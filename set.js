const users = [
  { id: 1, name: "Vasya" },
  { id: 2, name: "Petya" },
  { id: 1, name: "Vasya" },
];

// идем по каждому элементу вассива и возвращаем первый попавшийся из users
// получаем новый массив в котором 1 и 3 элемент имеют одну и ту же ссылку
// и из-за этого срабатывает set
const set = new Set(users.map((el) => users.find((item) => el.id === item.id)));

console.log(set);
