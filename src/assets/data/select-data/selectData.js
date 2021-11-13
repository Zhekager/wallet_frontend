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
const currentMonth = month.find(m => Number(m.value) === new Date().getMonth() + 1);
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
        sum: '10'
    },
    {
        id: '2',
        color: 'red',
        value: 'Продукты',
        sum: '1000'
    },
]

export { month, year, yearInitial, monthInitial, tableData };