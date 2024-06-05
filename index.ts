////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { url } from "inspector";
// import { type } from "os";
// import { Interface } from "readline";

const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "Jhon";

// обєкт типізувати не можна. Це треба робити на етапі використання коли ми вже десь приміняємо цей обєкт
const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "Jhon",
  messages: {
    error: "error",
  },
};

const createError = (msg: string) => {
  throw new Error(msg);
};

// прописуємо тут типізацію обєкта і деструктуризацію
function logBrtMsg({ isBirthdayData, ageData, userNameData, messages: { error }}: { // деструктуризація
  isBirthdayData: boolean;
  ageData: number;              //типізація
  userNameData: string;
  messages: { error: string };
}): string {
  if (isBirthdayData) {
    return ` Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1} `;
  } else {
    return createError(error);
  }
 
}

console.log(logBrtMsg(userData));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ...string[] допомагає розширити кортеж на будь яку кількість строк в даному випадку
const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'john', 'Andriy', 'Ivan']


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// типізація масиву. типізувати масиви тільки з одним типом даних
const departments: string[] = ['dev', 'design', 'marketing']

// так краще не робити. Замість масивів з різними типами даних краще використовувати кортежі
const nums: any[] = ['dev', 8 ,  'design', 7, 'marketing', false]

// масив масивів така собі матриця. number[][] це типізація для масиву масивів
const matriks: number[][] = [[3, 8, 0], [8, 2, 1]]



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// обєднанння різних типів. таким чином тут може бути один з цих 3 типів
const massage: string | number | boolean = 5

// тут може бути або масив строк або масив чисел. комбінувати типи в одному масиві не можна
const massages: string[] | number[] = ['a', 'b', 'c',]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// звуження типів. Тобто проводити операції з різними типами без помилок

function printMsg(msg: string | number): void {
    if (typeof msg === 'string') {
        console.log(msg.toUpperCase()); // метод для строки
    } else{
        console.log(msg.toExponential()); // метод для числа
    }
}

const printReadings = (a: string | number, b:  string | number ) => {
    if (a === b) {
        console.log(a, b); // тобто строка або число 
    } 
}

const printMassive = (a: number[] | string ) =>  {
  console.log(a.slice(0,3)) // тобто строка або масив чисел
}

function checkReadings(readings: {system: number} | {user: boolean}): void {
    if ('system' in readings ) {
        console.log(readings.system); // тобто число
    } else{
        console.log(readings.user); // тобто boolean
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// примітивні літеральні тип. тобто сюда можна помістити тільки hello бо ця змінна має тип hello
let msg: 'hello' = 'hello'
msg = 'hello'

function startServer(protocol: 'http' | 'https', port: 3000 | 3001): 'Server started'{
    console.log(`Server started on ${protocol}://server: ${port}`);
    return 'Server started'
}
startServer( 'https', 3001)


// псевдонім типів
type AnimationTimingFunction = 'ease' | 'ease-out' | 'ease-in'
// просто присвоюєм імя анімації        
const animName: string = 'fade'

function createAnimation (
    id: string | number,
    animName: string,
    timingFunc: AnimationTimingFunction = "ease", // псевдонім типів
    duration: number,
    iterCount: 'infinite' | number
): void {
    console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`)
}
    
createAnimation( 'id', animName, 'ease-in', 5, 'infinite')


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// інтерфейси Не можуть працювати з примітивними значеннями. type можуть 
interface Config {
    protocol: 'http'| 'https';
    port: 3000 | 3001
}

interface Role{
    role: string
}
// створюєм інтерфейс ConfigWithRole який наслідує властивості від двох попередніх інтерфейсів.
// в дужках можна теж прописати властивості і вони будуть включені в цей інтефейс
// Щоб обєднати властивості інтерфейсів через інший інтерфейс використовують extends. для типів назва & назва 
interface ConfigWithRole extends Config, Role {
    test: number 
}

const serverConfig: ConfigWithRole = { // Config прописали сюди як аннотацію обєкта
    protocol: 'https',
    port: 3000,
    role: 'admin',
    test: 35
}

startServer(serverConfig.protocol, serverConfig.port)

// ще один варіант використання інтерфейсу

interface Styles {
    [key: string]: string
}

const styles: Styles =  {
    position: 'absolute',
    top: '20px'
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// type можуть працювати з примітивними значеннями. Інтерфейси так не вміють
// примітивне значення.
type Protocol = 'http' | 'https'

type Configs = {
    protocol: 'http' | 'https';
    port: 3000 | 3001;
}

type Roles = {
    role: string;
}
// Щоб обєднати властивості інтерфейсів через інший інтерфейс використовують extends. для типів назва & назва 
type ConfigsWithRoles = Configs & Roles ;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface User {
   readonly login: string // Для інтерфейса. Це значить шо властивість login не можна переназначати. readonly тобто властивість тільки для читання
    password: string
}

const user: User = {
    login: 'first',
    password: 'qwerty',
}

// Для масива. Це значить шо властивість login не можна переназначати. readonly тобто властивість тільки для читання
const basicPorts: readonly number[] = [3000, 3001, 5555] 


const userFreeze: Readonly<User> ={ // ще один варіант використання Readonly
    login: 'first',
    password: 'qwerty',
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Enums

enum Directions{ 
    TOP,
    RIGHT,
    LEFT,
    BOTTOM
}

// типи краще не змішувати. тут тільки числа
enum TimingFunc {
    EASE = 10, // самі задаємо значення
    EASE_IN = 40,
    LINEAR = EASE + EASE_IN // так можна робити. Це працює
}

// тобто коли ми викликаємо функцію то аргумент direction може мати тільки ті значення які знаходяться в enum Directions
// так само з TimingFunc
function frame (elem: string, direction: Directions, tFunc: TimingFunc): void {
    if (direction === Directions.RIGHT) {
        console.log(tFunc);
    }
}
frame ( 'id', Directions.RIGHT, TimingFunc.LINEAR)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Unknown 

let smth: unknown; // тобто не відомий тип

type t1 = any | unknown // тут буде any
type t2 = any & unknown // тут буде any
type t3 = number | unknown // тут буде unknown
type t4 = number & unknown // тут буде number


// пробуємо розпарсити строку яка видає не відомий тип
const userDataJson =  '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

function safeParce (comesArgument: string) : unknown {
    return JSON.parse(comesArgument)
}

const data = safeParce(userDataJson)

// функція вертає не відомий аргумент 
function transferData (unknownArgument: unknown): void {
    if (typeof unknownArgument === 'string') { // якщо його тип string то  console.log(unknownArgument.toLocaleLowerCase())
        console.log(unknownArgument.toLocaleLowerCase())
    } else if (typeof unknownArgument === 'object' && unknownArgument) { // якщо його тип object і він не пустий то console.log(data)
        console.log(data)
    } else { // інакше помилка
        console.error('some error')
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// затверження типів

const fetchData = (url: string, method: 'GET' | 'POST'): void => {
    console.log(method);
}

const reqOptions = {
    url: 'https://someurl.com',
    method: 'GET'
} as const // створення обєктного літерала 

fetchData(reqOptions.url, reqOptions.method as 'GET') // ну або ше так можна сказати шо method передає саме такий тип як 'GET'

const box = document.querySelector('.box') as HTMLElement // така конструкція зустрічається часто тобто в даному випадку це HTMLElement (div з класом box)

const input = <HTMLInputElement>document.querySelector('input') // теж варіант затверження типів


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Guard 

// інтерфейс машини
interface Car {
    engine: string;
    wheels: number;
    // якщо є вложені властивості то у функції isCar використовуємо // return (car as Car). wheels.number !== undefined;
    // wheels: {
    //  number: number
    // type : string
   // }
}

// інтерфейс корабля
interface Ship {
    engine: string;
    sail: string;
}

// функція яка ремонтує транспорт
function repairVehicle(vehicle: Car | Ship) {
    if (isCar(vehicle)){ // так при підстановці isCar у функцію repairVehicle, функція repairVehicle розуміє що якщо це машина то видає властивість машини інакше властивість корабля
        vehicle.wheels
    } else {
        vehicle.sail
    }
}
// це функція-захисник яка перевіряє шо це точно машина і ми підставляємо її у функцію яка ремонтує транспорт
function isCar(car: Car | Ship): car is Car { 
    return "wheels" in car;
    // return (car as Car). wheels.number !== undefined;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Реалізація інтерфейсів з DOM

// до прикладу треба інтерфейс параграфу. Ми інтуїтивно прописуєм HTMLParagraph... далі ts сам находить цей інтерфейс
const p = document.querySelector('par') as HTMLParagraphElement
const forms = document.querySelectorAll("form") as NodeListOf<HTMLFormElement>;
const email = document.querySelector("#email") as HTMLInputElement;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generics він використовується як заглушка. Який тип передається аргументу, такий і вертається
// Generics потрібен для переіспользування тобто раз прийняв один тип. наступний раз прийняв інший тип.

//Generics в функції 
function processingData<T>(data: T): T {
    return data;
}
let res1 =  processingData(1)
let res2 =  processingData("2")
let res3 =  processingData(false)
const res4 =  processingData<number>(5) // так можна робити і тепер там повинно бути число

//Generics в інтерфейсі
interface Print<T> {
    design: T;
}

const somePrint: Print<string> = {
    design: 'ten'
}

const someOnePrint: Print<number> = {
    design: 20
}


// в interface  можна передавати типи Generics
interface ProcessingFunc{
    <T> (data: T): T
}

function processing<T>(data:T): T {
    return data
}

let newFUnc: ProcessingFunc = processing

//Generics в типах 

type  UserIN<T> = {
    login: T;
    age: number;
};

const userIn: UserIN<string> = {
    login: 'abc',
    age: 40
}

//  тобто цій змінній з Generics типом можна передавати або строку або число
const moneyBanka = <T extends string | number>(amount: T): T => {
    console.log(`add money: ${amount}`);
    return amount;
}
moneyBanka(500)
moneyBanka('500')



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// приклад з Generics типами

// оскільки створені обєкти мають властивості game, hours які міняються місцями то створюємо інтерфейс з game: Game hours: Hours;
// оскільки server у нас скрізь строка то server: string; і прописуємо типізацію в кожному обєкті PlayerData<string, number>
interface PlayerData<Game, Hours> {
	game: Game;
	hours: Hours;
	server: string;
}

const player1: PlayerData<string, number> = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2: PlayerData<number, string> = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3: PlayerData<string, object> = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ще один приклад
// оскільки в нас обмежена кількість обєктів які нам приходять то використовуєм обмежувач enum
enum FigureNames {
	Rect = "rect",
	Circle = "circle",
	Triangle = "triangle",
	Line = "line",
}

// інтерфейс  потрібен щоб показати що властвість name обовязкова
interface Figure {
	name: FigureNames;
}

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}
// тут ми обмежуємо що в функцію може приходити тип T extends Figure
function calculateAmountOfFigures<T extends Figure>( figure: T[]): AmountOfFigures {
	const amount: AmountOfFigures = {
        // тут вводяться числа
		squares: 0,
		circles: 0,
		triangles: 0,
		others: 0,
	};

    // перебираємо властивості і збільшуємо AmountOfFigures на один якщо властивість нам зустрічається
	figure.forEach((fig) => {
		switch (fig.name) {
			case FigureNames.Rect:
				amount.squares++;
				break;
			case FigureNames.Circle:
				amount.circles++;
				break;
			case FigureNames.Triangle:
				amount.triangles++;
				break;
			default:
				amount.others++;
		}
	});

	return amount;
}

const datas = [
	{
		name: FigureNames.Rect,
		data: { a: 5, b: 10 },
	},
	{
		name: FigureNames.Rect,
		data: { a: 6, b: 11 },
	},
	{
		name: FigureNames.Triangle,
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: FigureNames.Line,
		data: { l: 15 },
	},
	{
		name: FigureNames.Circle,
		data: { r: 10 },
	},
	{
		name: FigureNames.Circle,
		data: { r: 5 },
	},
	{
		name: FigureNames.Rect,
		data: { a: 15, b: 7 },
	},
	{
		name: FigureNames.Triangle,
	},
];

console.log(calculateAmountOfFigures(datas));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// вбудовані Generics типи 

interface IState {
    data: {
        name: string
    },
    tag: string
}

function action (state: Readonly<IState>) {
   // state.data = 'abs' // так не вийде зробити бо Readonly робить функцію тільки для читання
}


// Partial це Generics який робить властивості не обов'язковими.
// Тобто в interface IState є властивість  tag: string але вона не обов'язкова і тому нема помилок
const state: Partial<IState> = {
    data: {
        name: 'john'
    }
}


interface IState2 {
    info: {
        surname: string
    },
    coment?: string
}

// Required це Generics який робить властивості обов'язковими.
// Тобто в interface IState2 є властивість coment: string і вона є обов'язкова щоб уникнути помилок
const state2: Required<IState2> = {
    info: {
        surname: 'vasiliev'
    },
    coment: 'like'
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// оператор Keyof. Робота з ключами обєкту

interface ICompany {
    name: string;
    debts: number;
}

// company - об'єкт, який реалізує інтерфейс ICompany. Цей об'єкт має властивості name (назва компанії) і debts (борги).
// name - ключ (строка), який вказує на властивість name у типі T (в даному випадку ICompany).
// debts - ключ (строка), який вказує на властивість debts у типі T (в даному випадку ICompany).

function printDebts <T, K extends keyof T, S extends keyof T>(company: T, name: K, debts: S) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const hh: ICompany = {
    name: 'HH',
    debts: 500000
}

printDebts(hh, 'name', 'debts')





interface IOwner {
    name: {
        owner: 'Andriy'
    }
}
type CompanyOwnerType = IOwner['name']['owner'];


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Conditional types and infer 
// Condition ? true : false 

// TypeScript перевіряє, чи 'Name' (який є типом) розширюється (або наслідує) від 'Hello'.
// Оскільки 'Name' не є підтипом 'Hello', умова буде вважатися false, тому буде використаний тип після двокрапки, тобто number.
type Example = 'Name' extends 'Hello' ? string : number;

// Ми вертаємо дані або string або number. Якщо string то дані приходять з interface FromUser інакше з interface FromBase
type FromUserFromBase<T extends string | number> = T extends string ? FromUser : FromBase

interface FromUser {
    weight: string;
}

interface FromBase {
    calories: number;
}

// infer значить що ми витягуємо якийсь елемент. В даному випадку перший. 
// Якщо перший тип не приходить то вертаємо Т тобто той який прийде
type GetFirstType<T> = T extends Array<infer First> ? First : T;



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mapped types aвтоматизоване призначення певного типу всім елементам 
// В такому випадку ми призначаємо кожному елементу тип string
type Keys = 'name' | 'age' | 'role';

type UserInformation = {
    // K - випадковий ідентифікатор. Keys - множина елементів
    [K in Keys] : string
} 

const alex: UserInformation = {
    name: 'Alex',
    age: '25',
    role: 'admin'
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Template literal types

// тобто створюємо тип NewMyAnimation в який засовуємо MyAnimation і отримуємо fadeIn
type MyAnimation = 'fade'
type NewMyAnimation = `${MyAnimation}In`

// тут In додається і achive до і до arckhive. Получається "achiveIn" | "arckhiveIn"
type Target = 'achive' | 'arckhive'
type NewTarget = `${Target}In`

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utility types: Pick, Omit, Extract, Exclude, Record
 
interface Currencies {
    usa: 'USD';
    canada: 'CAD';
    mexico: 'MXN';
    brazil: 'BRL';
}
// Omit тип виключення тобто тут він вертає типи вже без usa тобто виключає 
type CurrWithoutUSA = Omit<Currencies, 'usa'>;

// Pick фільтрує типи по властивостях. Створюємо список валют для двох країн
type CurrCanadaUkraine = Pick<Currencies, 'usa' | 'brazil'>

// Exclude допомагає забирати з юніон типа ті типи які відповідають умові
// видаляє той тип який передається
// приклад юніон типа 'germany' | 'spain'
type ContryChoice = 'germany' | 'spain';
type WithoutMexico = Exclude<ContryChoice, 'spain'>

// Extract витягує той тип який передається
type SwipeType = Extract<ContryChoice, 'germany'>

// Record записує першим аргументом ключ, другим аргументом значення
type PlayersNames = 'alex' | 'john'
type GameData = Record<PlayersNames, 'value'>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Return type, Parameters type

// функція вертає строку бо число + строка = строка
function calculate(a: number, b: string) {
    return a + b;
}
// Return type потрібен щоб дізнатися який тип буде вертати функція
type CalculateRT = ReturnType<typeof calculate>

// Parameters type потрібен щоб дізнатися який тип будуть мати параметри.
// Якщо хочем знати тип конкретного параметра то пишемо по індексу [0]
type CalculatePT = Parameters<typeof calculate>[0]


// ConstructorParameters type потрібен щоб дізнатися який тип будуть мати параметри в class
class Examples {
    constructor(a: boolean){}
}

type WhatTypeClss = ConstructorParameters<typeof Examples>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Awaited коли він вертається після завершення, то має вернути такий тип який йому вказаний

type FormPromise = Awaited<Promise<boolean>>;


async function fetchUsers(): Promise<User[]> {
    const users: User[] = [
        {
            login: 'Andriy',
            password : '111111'
        }
    ]
    return users;
}

const users = fetchUsers();

// дізнаємося тип функції fetchUsers
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

// замість того шоб використовувати цю строку ми просто пишемо Awaited
type GetInferType<T> = T extends Array<infer First> ? First : T;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class // Наследование(extends) – это когда мы можем создать цепочку классов, где есть 
// связь родитель – потомок. Потомок будет содержать все свойства и методы родителя

class Box {
    width!: number

    constructor(width: number){
        this.width = width
    }
}

// таким чином клас PresentBox наслідує властивості класу Box.

class PresentBox extends Box {
    wrap!: string;

    constructor(wrap: string, width: number){
        super(width);
        this.wrap = wrap;
       
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// имплементация(implemets) - это описание того, что должно быть 
// внутри класса при помощи одного или нескольких интерфейсов.
// Если не указать тип у аргумента login, то будет ошибка. Все потому, что 
// класс не принимает аннотации аргументов или все необязательные свойства интерфейса(ов)!
interface IUser {
    login: string;
    password: string;
}

class UserForm implements IUser {
    login!: string;
    password!: string;
    
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// модифікатори видимості свойств public/private

// так робити можна але великий код
class User1 {
    // якщо private то властивість буде доступна тільки в цьому класі
    private email!: string;
    public name!: string;
    // якщо  protected то властивість буде доступна в цьому класі і в класах які екстендяться від нього
    protected password!: string;

    constructor(email: string, name: string){
        this.email = email
        this.email = name
    }
}

// протіше буде зробити так
class User2 {
    constructor(public email: string, public name: string,){}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// статичні властивості 


// можна писати так
class Game {
   Pubg!: string
}

new Game().Pubg

// через статичні властивості буде так 
class Game1 {
   static Pubg: string
 }
 
Game1.Pubg

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Декоратори

interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

@closeCar2
@changeDoorStatus(true)
class myCar implements ICar {
    fuel: string = '50%';
    open: boolean = true;
    freeSeats!: number;
    isOpen() {
        console.log(this.fuel);
        return this.open ? 'open' : 'close';
    }
}

// тут декоратор який перевіряє чи закрита машина
// але таким чином декоратор спрацює перед тим як сконструюються значення class нічого не зміниться.
// таке має сенс тільки коли у класа нема конкретних значень. тобто так  open: boolean
function closeCar(constructor: Function, context: ClassDecoratorContext) {
    //  constructor це ціль або аргумент в декораторі 
    // prototype використовуєм бо ця властивість ше не появилась в class 
    constructor.prototype.open = false;
}

// а так декоратор класа спрацює вже після того як сконструюються значення 
function closeCar2<T extends {new (...args: any[]): {}}>(constructor: T, context: ClassDecoratorContext<T>){
    return class extends constructor {
        open = false
    }
}


// а так виглядають декоратори в які передаються значення

function changeDoorStatus(status: boolean) {
    return<T extends {new (...args: any[]): {}}>(constructor: T, context: ClassDecoratorContext<T>) => {
        return class extends constructor {
            open = status
        }
    }
}
const car = new myCar();
console.log(car.isOpen())


// Декоратори методів 

function checkAmountOfFuel(
 // target обєкт до якого приміняється декоратор
 target: Object,
 propertyKey: string | Symbol, 
 descriptor: PropertyDescriptor

){
   descriptor.enumerable = false;
}