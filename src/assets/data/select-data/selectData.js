const month = [
  { value: '1', label: 'Январь' },
  { value: '2', label: 'Февраль' },
  { value: '3', label: 'Март' },
  { value: '4', label: 'Апрель' },
  { value: '5', label: 'Май' },
  { value: '6', label: 'Июнь' },
  { value: '7', label: 'Июль' },
  { value: '8', label: 'Август' },
  { value: '9', label: 'Сентябрь' },
  { value: '10', label: 'Октябрь' },
  { value: '11', label: 'Ноябрь' },
  { value: '12', label: 'Декабрь' },
];

const year = [
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
];

const yearInitial = new Date().getFullYear();
const currentMonth = month.find(
  m => Number(m.value) === new Date().getMonth() + 1,
);
const monthInitial = currentMonth.label;

// const getRandomColor = () => {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

const tableData = [
  {
    id: '1',
    color: 'black',
    value: 'Основные расходы',
    sum: '10',
  },
  {
    id: '2',
    color: 'red',
    value: 'Продукты',
    sum: '1000',
  },
];

const categories = [
  {
    _id: '6196e5398a118953cd850782',
    name: 'Main costs',
    value: 'Main costs',
    category: 'Main costs',
    label: 'Main costs',
  },
  {
    _id: '6196e5398a118953cd850783',
    name: 'Products',
    value: 'Products',
    category: 'Products',
    label: 'Products',
  },
  {
    _id: '6196e5398a118953cd850784',
    name: 'Car',
    value: 'Car',
    category: 'Car',
    label: 'Car',
  },
  {
    _id: '6196e5398a118953cd850785',
    name: 'Taking Care of Yourself',
    value: 'Taking Care of Yourself',
    category: 'Taking Care of Yourself',
    label: 'Taking Care of Yourself',
  },
  {
    _id: '6196e5398a118953cd850786',
    name: 'Taking Care of children',
    value: 'Taking Care of children',
    category: 'Taking Care of children',
    label: 'Taking Care of children',
  },
  {
    _id: '6196e5398a118953cd850787',
    name: 'Home Goods',
    value: 'Home Goods',
    category: 'Home Goods',
    label: 'Home Goods',
  },
  {
    _id: '6196e5398a118953cd850788',
    name: 'Education',
    value: 'Education',
    category: 'Education',
    label: 'Education',
  },
  {
    _id: '6196e5398a118953cd850789',
    name: 'Leisure',
    value: 'Leisure',
    category: 'Leisure',
    label: 'Leisure',
  },
  {
    _id: '6196e5398a118953cd85078a',
    name: 'Other expenses',
    value: 'Other expenses',
    category: 'Other expenses',
    label: 'Other expenses',
  },
];

const addIncomes = [
  {
    _id: '6196e5398a118953cd85078b',
    name: 'Regular income',
    value: 'Regular income',
    category: 'Regular income',
    label: 'Regular income',
  },
  {
    _id: '6196e5398a118953cd85078c',
    name: 'Irregular income',
    value: 'Irregular income',
    category: 'Irregular income',
    label: 'Irregular income',
  },
  {
    _id: '6196e5398a118953cd85078d',
    name: 'Miscellaneous',
    value: 'Miscellaneous',
    category: 'Miscellaneous',
    label: 'Miscellaneous',
  },
];

export {
  month,
  year,
  yearInitial,
  monthInitial,
  tableData,
  categories,
  addIncomes,
};
