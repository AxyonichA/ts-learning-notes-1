class Account {
	/*
	// Свойства должны быть перечислены в теле класса
	readonly id: number; // Неизменяемое свойство
	owner: string;
	private _balance: number; // Доступно только внутри класса
	nickname?: string; // Опциональное свойство
	*/
	constructor(
		// Вместо верхнего варианта можно объявить свойства прямо в параметрах конструктора
		public readonly id: number, 
		public owner: string, 
		private _balance: number
	) {
		// this.id = id;
		// this.owner = owner;
		// this._balance = balance;
	}
	deposit(amount: number): void {
		if(amount <= 0) {
			throw new Error('Invalid amount')
		} else {
			this._balance += amount
		}
	}
	get balance(): number {
		return this._balance
	}
}

let account = new Account(1, 'Mosh', 0)
account.deposit(100)
console.log(account.balance)

class SeatAssignment {
	[seatNumber: string]: string
}
let seats = new SeatAssignment()
seats.A1 = 'Mosh'
seats.A2 = 'John'

// static methods and getters
class Ride {
	private static _activeRides: number = 0; // свойство класса

	start() {
		Ride._activeRides++
	}
	stop() {
		Ride._activeRides--
	}

	static get activeRides() {
		return Ride._activeRides
	}
}
let ride1 = new Ride()
ride1.start()
let ride2 = new Ride()
ride2.start()
console.log(Ride.activeRides);



// superclasses
class Person {
	constructor(
		public firstName: string,
		public lastName: string
	) {}

	get fullName() {
		return `${this.firstName} ${this.lastName}`
	}

	walk() {
		console.log(`${this.fullName} is walking`)
	}
}

class Student extends Person {
	constructor(
		public studentId: number,
		firstName: string,
		lastName: string,
	) {
		super(firstName, lastName)
	}
}

let student = new Student(1, 'Vasya', 'Pupkin')
student.walk()


class Teacher extends Person {
	override get fullName() {
		return `Professor ` + super.fullName
	}

}
let teacher = new Teacher('John', 'Doe')
console.log(teacher.fullName);

// Polymorphism
printNames([
	new Student(1, 'Vasya', 'Pupkin'), 
	new Teacher('John', 'Doe')
])
function printNames(people: Person[]) {
	for(let person of people) {
		console.log(person.fullName)
	}
}


// abstract class
abstract class Shape {
	constructor(public color: string) {}
	abstract render(): void;
}
class Circle extends Shape {
	constructor(public radius: number, color: string) {
		super(color)
	}
	override render(): void {
		console.log('Rendering a circle')
	}
}

// interface
// abstract class Calendar {
// 	constructor(public name: string) {

// 	}
// 	abstract addEvent(): void
// 	abstract removeEvent(): void
// }
interface Calendar {
	name: string;
	addEvent(): void;
	removeEvent(): void;
}

interface CloudCalendar extends Calendar {
	sync(): void;
}

class GoogleCalendar implements Calendar {
	constructor(public name: string) {}
	addEvent(): void {
		throw new Error('Method not implemented.');
	}
	removeEvent(): void {
		throw new Error('Method not implemented.');
	}
}