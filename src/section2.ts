// types
type EmployeeType = {
	readonly id: number,
	name?: string,
	retire: (date: Date) => void
}
let employee2: EmployeeType= { 
	id: 1,
	name: 'Vasya',
	retire: (date: Date) => {
		console.log(date)
	}
}
employee2.name = 'Al'

// union type
function kgToLbs(weight: number | string): number {
	if(typeof weight === 'number') {
		return weight * 2.2
	}
	return parseInt(weight) * 2.2
}
kgToLbs(10)
kgToLbs('10kg')

// Intersection types
type Draggable = {
	drag: () => void
}
type Resizable = {
	resize: () => void
}
type UIWidget = Draggable & Resizable
let textBox: UIWidget = {
	drag: () => {},
	resize: () => {}
}

// Literal types
type Quantity = 50 | 100
let quantity: Quantity = 100
type Metric = 'cm' | 'inch'

// Nullable types
function greet(name: string | null | undefined) {
	if(name) {
		console.log(name.toUpperCase())
	} else {
		console.log('Hello!')
	}
}
greet(null)


// Optional chaining
type Customer = {
	birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)
console.log(customer?.birthday);


// Nullish coalescing
let speed: number | null | undefined = null
let ride = {
	speed: speed ?? 30
}


// Type assertion
let phone = <HTMLInputElement>document.getElementById('phone')
phone.value


// Unknown type
function render(document: unknown) {
	// document.move() // error
	if (typeof document === 'string') {
		console.log(document.toUpperCase())
	}
}

// Never type
function reject(message: string): never {
	throw new Error(message);
}
// Never type
function processEvents(): never {
	while (true) {
		// ...
	}
}
reject('...')
console.log('Hello')