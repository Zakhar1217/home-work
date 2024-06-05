// - Знайти та вивести довижину настyпних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arrOfStrings = ['hello world', 'lorem ipsum', 'javascript is cool']
arrOfStrings.forEach(item => console.log(item.length))
console.log('----------------------------------')

// - Перевести до великого регістру наступні стрінгові значення
arrOfStrings.forEach(item => console.log(item.toUpperCase()))
console.log('----------------------------------')

let arrOfStringsUpperCase = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
arrOfStrings.forEach(item => console.log(item.toLowerCase()))
console.log('----------------------------------')

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   '
console.log(dirtyStr.trim())
console.log('----------------------------------')

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToArray(str) {
    return str.split(' ')
}

console.log(stringToArray('Ревуть воли як ясла повні'))
console.log('----------------------------------')

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0]
let mappedNumbers = numbers.map(num => num.toString())
console.log(mappedNumbers)
console.log('----------------------------------')

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
function sortNums(arr, direction) {
    if (arr.length > 0) {
        if (direction === 'ascending') {
            return arr.sort((a, b) => a - b)
        } else if (direction === 'descending') {
            return arr.sort((a, b) => b - a)
        }
    } else {
        throw new Error('arr length is less than 1')
    }
}

let nums = [11,21,3];
console.log(sortNums(nums,'ascending'))// [3,11,21]
console.log(sortNums(nums,'descending')) // [21,11,3]
console.log('----------------------------------')

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log('Відсортувати масив за спаданням за monthDuration:')
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))
console.log('Відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців:')
console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5))
console.log('Перетворити кожен елемент на наступний тип {id,title,monthDuration}:')
console.log(coursesAndDurationArray.map((item, index) => ({
    id: index + 1,
    title: item.title,
    monthDuration: item.monthDuration,
})))
console.log('--------------------------------')

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

let cards = {
    cardSuite: ['spade', 'diamond','heart', 'clubs'],
    value: ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
    color: {
        spade: 'black',
        diamond: 'red',
        heart: 'red',
        clubs: 'black'
    }
}

let spadeAce = { suit: 'spade', value: 'Ace', color: 'black' }
console.log('Піковий туз:', spadeAce)

let sixes = cards.cardSuite.map(suite => ({ suit: suite, value: '6', color: cards.color[suite] }))
console.log('Всі шістки:', sixes)

let redCards = []
cards.cardSuite.forEach(suite => {
    if (cards.color[suite] === 'red') {
        cards.value.forEach(value => {
            redCards.push({ suit: suite, value: value, color: 'red' })
        })
    }
})
console.log('Всі червоні карти:', redCards)

let diamonds = cards.value.map(value => ({ suit: 'diamond', value: value, color: 'red' }))
console.log('Всі буби:', diamonds)

let clubsNineOrMore = cards.value.slice(3).map(value => ({ suit: 'clubs', value: value, color: 'black' }))
console.log('Всі трефи від 9 та більше:', clubsNineOrMore)
console.log('--------------------------------')

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let fullDeck = [];

cards.cardSuite.forEach(suite => {
    cards.value.forEach(value => {
        fullDeck.push({ suit: suite, value: value, color: cards.color[suite] });
    });
});

console.log('Повна колода:', fullDeck)

let groupedBySuit = fullDeck.reduce((acc, card) => {
    if (!acc[card.suit]) {
        acc[card.suit] = []
    }
    acc[card.suit].push(card)
    return acc
}, { spade: [], diamond: [], heart: [], clubs: [] })

console.log('Карти, згруповані за мастями:', groupedBySuit)
console.log('--------------------------------')

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log('Об\'єкти, де в modules є sass')
let coursesArrayWithSASSModule = coursesArray.filter(obj => obj.modules.includes('sass'));
console.log(coursesArrayWithSASSModule)
console.log('--------------------------------')

console.log('Об\'єкти, де в modules є docker')
let coursesArrayWithDockerModule = coursesArray.filter(obj => obj.modules.includes('docker'));
console.log(coursesArrayWithDockerModule)