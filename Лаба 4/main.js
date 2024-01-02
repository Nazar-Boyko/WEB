// Завдання 1: Створення об'єкта "Турфірма"
function Turfirma(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
}

// Завдання 2: Створення об'єкта "Путівка"
function Putivka(city,price,number_of_days) {
    this.city = city;
    this.price = price;
    this.number_of_days = number_of_days;

    this.calculateCost = function () {
        return this.price * this.number_of_days;
    };

    this.changePrice = function (newPrice) {
        this.price = newPrice;
    };

    this.display = function () {
        console.log(`Місто: ${this.city}, Ціна за день: ${this.price}, Кількість днів: ${this.number_of_days}`);
    };
}

// Завдання 3: Об'єднання властивостей і методів об'єктів "Турфірма" і "Путівка"
function TravelAgency(turfirma, putivka){
    return Object.assign({}, this, turfirma, putivka);
}

// Завдання 4: Додавання методу "Показати дані" до прототипу об'єкта "Турфірма"
Turfirma.prototype.showData = function () {
    console.log(`Назва: ${this.name}, Адреса: ${this.address}, Телефон: ${this.phone}`);
};

// Завдання 5: Створення об'єкта "Відділ", який наслідує властивості і методи об'єкту "Турфірма"
function Vidil(name, address, phone, departmentAddress) {
    Turfirma.call(this, name, address, phone);

    this.departmentAddress = departmentAddress;

    this.showData = function () {
        console.log(`Назва: ${this.name}`);
        console.log(`Адреса фірми: ${this.address}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Адреса відділу: ${this.departmentAddress}`);
    };
}


// Завдання 6: Реалізація класів "ТурфірмаКлас" і "ВідділКлас"
class TurfirmaClass {

    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    get GetAddress() {
        return this.address;
    }

    showData() {
        console.log(`Назва: ${this.name}`);
        console.log(`Адреса: ${this.address}`);
        console.log(`Телефон: ${this.phone}`);
    }
}

class VidilClass extends TurfirmaClass {
    constructor(name, address, phone, vidil_address) {
        super(name, address, phone,);
        this.vidil_address = vidil_address;
    }
    
    showData() {
        super.showData()
        console.log(`Адреса відділу: ${this.vidil_address}`);
    }
}

// Приклад використання
const turfirma = new Turfirma('Поїхали з нами!', 'Київ, вул. Пирогова, 4/26', '004 333 4375');
const putivka = new Putivka('Париж', 1000, 7);
const vidil = new Vidil('Відділ турагенції "Поїхали з нами!"', 'Київ, вул. Пирогова, 4/26', '004 333 4375', "Київ, вул. Дмитрівська, 3/7")
const turfirmaClass = new TurfirmaClass('Coral Travel', 'Київ, вул. Івана Дзюби, 17', '097 618 0505');
const vidilClass = new VidilClass('Відділ тургагенції "Coral Travel"', 'Київ, вул. Івана Дзюби, 17', '068 763 2305', 'Київ, д. 8-Б Львівська площа');


function Task1(){
    console.log("\nЗавдання 1")
    console.log(`Назва: ${turfirma.name}`)
    console.log(`Адреса: ${turfirma.address}`)
    console.log(`Телофон: ${turfirma.phone}`)
}

function Task2(){
    console.log("\nЗавдання 2")
    console.log("Путівка")
    putivka.display()

    console.log("Обчислення вартості путівки")
    let cost = putivka.calculateCost()
    console.log(`Вартість путівки: ${cost}`)
}

function Task3(){
    console.log("\nЗавдання 3")
    let turagency = TravelAgency(turfirma, putivka) 
    console.log(`Турфірма "${turagency.name}", що знаходиться за адресою ${turagency.address}, має таку путівку:`)
    turagency.display()
}

function Task4(){
    console.log("\nЗавдання 4")
    turfirma.showData()
}

function Task5(){
    console.log("\nЗавдання 5")

    vidil.showData()
}

function Task6(){
    
    console.log("\nЗавдання 6")
    console.log("Інформація про TurfirmaKlas")
    
    turfirmaClass.showData()
    
    console.log("\nВиведення лише адреси")
    console.log(turfirmaClass.GetAddress)
    
    console.log("\nІнформація про VidilKlas")
    vidilClass.showData()

}
