// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangleArea = (a, b) => {
    if (a > 0 && b > 0) {
        return a * b
    } else {
        return 'Введені числа менше за 0'
    }
}

console.log(`Площа прямокутника: ${rectangleArea(20, 40)} метрів квадратних`)
console.log('-----------------------------------------------')

// створити функцію яка обчислює та повертає площу кола з радіусом r
const circleArea = r => {
    if (r > 0) {
        return (Math.PI * r * r).toFixed(2)
    } else {
        return 'Введені числа менше за 0'
    }
}

console.log(`Площа кола з радіусом: ${circleArea(10)} метрів квадратних`)
console.log('-----------------------------------------------')

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinderArea = (r, h) => {
    if (r > 0 && h > 0) {
        return (2 * Math.PI * r * (h + r)).toFixed(2)
    } else {
        return 'Введені числа менше за 0'
    }
}

console.log(`Площа циліндру: ${cylinderArea(6, 6)} метрів квадратних`)
console.log('---------------------------------')

// створити функцію яка приймає масив та виводить кожен його елемент
const inputArray = array => {
    for (let item of array) {
        console.log(item)
    }
}

inputArray([3, 4, 5])
console.log('-----------------------------------------------')

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
const createParagraph = (...rest) => {
    for (let item of rest) {
        document.write(`
            <p>${item}</p>
        `)
    }
    console.log('-----------------------------------------------')
}

// createParagraph('dede', 'dededede', 'fafagfva', 'ghtyjhty')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createList = text => {
    document.write('<ul>')
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write('</ul>')
    document.write('-----------------------')
}

// createList('hello')

// створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createList2 = (text, qtyOfLi) => {
    document.write('<ul>')
    for (let i = 0; i < qtyOfLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
    document.write('-----------------------')
}

// createList2('random text', 5)

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const primitiveData = arr => {
    document.write('<ul>')
    for (let el of arr) {
        document.write(`<li>${el}</li>`)
    }
    document.write('</ul>')
    document.write('-----------------------')
}

// primitiveData([23123, 'Hello', true, null, undefined])

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const createObj = arr => {
    for (let item of arr) {
        document.write(`
        <div class="item">
            <p>ID: ${item.id}</p>
            <p>Name: ${item.name}</p>
            <p>age: ${item.age}</p>
        </div>`)
    }
    document.write('-----------------------')
}

// createObj([
//     {
//         id: 1,
//         name: "Іван",
//         age: 25
//     },
//     {
//         id: 2,
//         name: "Марія",
//         age: 30
//
//     },
//     {
//         id: 3,
//         name: "Петро",
//         age: 28
//     }
// ])

// створити функцію яка повертає найменьше число з масиву
const finTheSmallestNum = arr => {
    if(arr.length === 0) {
        return 'Масив порожній'
    } else {
        let smallestNum = arr[0]
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] < smallestNum) {
                smallestNum = arr[i]
            }
        }
        return smallestNum
    }
}

smallestNum = finTheSmallestNum([5, 2, 1, 3, 4])
console.log(smallestNum)
console.log('---------------------------------')

// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = arr => {
    let sum = 0

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum
}

console.log(sum([3, 1, 4, 6, 4, 2]));
console.log('-----------------------------------------------')

// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    console.log('default arr: ', arr)
    let elIndex1 = arr[index1]
    let elIndex2 = arr[index2]

    arr[index1] = elIndex2
    arr[index2] = elIndex1

    console.log('new arr: ', arr)
}

swap([2, 3, 4, 1, 5], 1, 3)
console.log('-----------------------------------------------')

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let obj of currencyValues) {
        if (exchangeCurrency === obj['currency']) {
            return Math.round(sumUAH/obj['value'])
        }
    }
}

let currencyValuesArr = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42},
    {currency:'YEN',value:45},
]

let resOFExchange = exchange(10000, currencyValuesArr, 'YEN')
console.log(resOFExchange)