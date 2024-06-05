// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
}

let arrOfUsers = [
    new User(1, 'User1', 'user1@example.com', '123-456-7890'),
    new User(2, 'User2', 'user2@example.com', '123-456-7891'),
    new User(3, 'User3', 'user3@example.com', '123-456-7892'),
    new User(4, 'User4', 'user4@example.com', '123-456-7893'),
    new User(5, 'User5', 'user5@example.com', '123-456-7894'),
    new User(6, 'User6', 'user6@example.com', '123-456-7895'),
    new User(7, 'User7', 'user7@example.com', '123-456-7896'),
    new User(8, 'User8', 'user8@example.com', '123-456-7897'),
    new User(9, 'User9', 'user9@example.com', '123-456-7898'),
    new User(10, 'User10', 'user10@example.com', '123-456-7899')
]

// console.log(arrOfUsers);
console.log('--------------------------------')

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredArrOfUsers = arrOfUsers.filter(user => user.id%2 === 0);
console.log(filteredArrOfUsers)
console.log('--------------------------------')

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arrOfUsers.sort((a, b) => a.id - b.id))
console.log('--------------------------------')

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}

let clients = [
    new Client(1, 'John', 'Doe', 'john.doe@example.com', '+1-800-555-0100', ['Laptop', 'Mouse', 'Keyboard', 'HDMI Cable', 'Speakers', 'Notebook']),
    new Client(2, 'Jane', 'Smith', 'jane.smith@example.com', '+1-800-555-0101', ['Smartphone', 'Charger', 'HDMI Cable', 'Speakers', 'Notebook']),
    new Client(3, 'Emily', 'Johnson', 'emily.johnson@example.com', '+1-800-555-0102', ['Tablet']),
    new Client(4, 'Michael', 'Williams', 'michael.williams@example.com', '+1-800-555-0103', ['Monitor', 'HDMI Cable', 'Speakers']),
    new Client(5, 'Sarah', 'Brown', 'sarah.brown@example.com', '+1-800-555-0104', ['Desk Lamp', 'Notebook', 'Smartphone', 'Charger']),
    new Client(6, 'David', 'Jones', 'david.jones@example.com', '+1-800-555-0105', ['Backpack', 'Water Bottle']),
    new Client(7, 'Laura', 'Garcia', 'laura.garcia@example.com', '+1-800-555-0106', ['Smartwatch', 'HDMI Cable', 'Speakers', 'Notebook', 'Headphones', 'Bluetooth Speaker', 'USB Cable']),
    new Client(8, 'James', 'Martinez', 'james.martinez@example.com', '+1-800-555-0107', ['Headphones', 'Bluetooth Speaker', 'USB Cable']),
    new Client(9, 'Linda', 'Rodriguez', 'linda.rodriguez@example.com', '+1-800-555-0108', ['Camera', 'Tripod']),
    new Client(10, 'Robert', 'Wilson', 'robert.wilson@example.com', '+1-800-555-0109', ['Gaming Console'])
]

console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length))

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, yearOfRelease, maxSpeed, engineVolume) {
    this.model = model
    this.manufacturer = manufacturer
    this.yearOfRelease = yearOfRelease
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume

    this.drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    this.info = () => {
        console.log('Info about car:')
        console.log(`Model: ${this.model}`)
        console.log(`Manufacturer: ${this.manufacturer}`)
        console.log(`Year of release: ${this.yearOfRelease}`)
        console.log(`Max speed: ${this.maxSpeed}`)
        console.log(`Engine volume: ${this.engineVolume}`)
        if (this.driver) {
            console.log(`Driver: ${JSON.stringify(this.driver)}`);
        } else {
            console.log('Driver: undefined');
        }
    }

    this.increaseMaxSpeed = newSpeed => {
        this.maxSpeed += newSpeed
    }

    this.changeYear = newValue => {
        this.yearOfRelease = newValue
    }

    this.addDriver = driver => {
        this.driver = driver
    }
}

let car1 = new Car("Model S", "Tesla", 2020, 250, 100)
car1.drive()
console.log('-------')
car1.info()
console.log('-------')
car1.increaseMaxSpeed(170)
car1.changeYear(2013)
car1.addDriver({name: 'Alex', surname: 'Vault', driverStage: 13})
car1.info()

console.log('--------------------------------')
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor (model, manufacturer, yearOfRelease, maxSpeed, engineVolume) {
//         this.model = model
//         this.manufacturer = manufacturer
//         this.yearOfRelease = yearOfRelease
//         this.maxSpeed = maxSpeed
//         this.engineVolume = engineVolume
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info() {
//         console.log('Info about car:')
//         console.log(`Model: ${this.model}`)
//         console.log(`Manufacturer: ${this.manufacturer}`)
//         console.log(`Year of release: ${this.yearOfRelease}`)
//         console.log(`Max speed: ${this.maxSpeed}`)
//         console.log(`Engine volume: ${this.engineVolume}`)
//         if (this.driver) {
//             console.log(`Driver: ${JSON.stringify(this.driver)}`);
//         } else {
//             console.log('Driver: undefined');
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//
//     changeYear(newValue) {
//         this.yearOfRelease = newValue
//     }
//
//     addDriver(driver) {
//         this.driver = driver
//     }
// }
//
// let car1 = new Car("Model S", "Tesla", 2020, 250, 100)
// car1.drive()
// console.log('-------')
// car1.info()
// console.log('-------')
// car1.increaseMaxSpeed(170)
// car1.changeYear(2013)
// car1.addDriver({name: 'Alex', surname: 'Vault', driverStage: 13})
// car1.info()

console.log('--------------------------------')
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor (name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellasArr = [
    new Cinderella('Anna', 19, 35),
    new Cinderella('Bella', 21, 36),
    new Cinderella('Cathy', 22, 37),
    new Cinderella('Diana', 18, 38),
    new Cinderella('Eva', 20, 39),
    new Cinderella('Fiona', 23, 40),
    new Cinderella('Gina', 25, 41),
    new Cinderella('Hannah', 24, 36),
    new Cinderella('Isla', 26, 37),
    new Cinderella('Jenna', 27, 38)
];

class Prince {
    constructor (name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}

const prince = new Prince('Arthur', 30, 37);

let foundCinderella = null;
for (let cinderella of cinderellasArr) {
    if (cinderella.footSize === prince.foundShoeSize) {
        foundCinderella = cinderella;
        break;
    }
}

if (foundCinderella) {
    console.log(`Prince ${prince.name} found his cinderella: ${foundCinderella.name}`);
} else {
    console.log('Prince has\'nt found cinderella');
}

const foundCinderellaUsingFind = cinderellasArr.find(cinderella => cinderella.footSize === prince.foundShoeSize);

if (foundCinderellaUsingFind) {
    console.log(`Prince ${prince.name} found his cinderella (with find method): ${foundCinderellaUsingFind.name}`);
} else {
    console.log('Prince has\'nt found cinderella');
}