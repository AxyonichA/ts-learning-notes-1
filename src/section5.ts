// Class decorator
function Component(constructor: Function) {
	console.log('Component decorator called');
	constructor.prototype.uniqueId = Date.now();
	constructor.prototype.insertInDOM = () => {
		console.log('Inserting the component in the DOM');
	};
}

@Component
class ProfileComponent {}


// Decorator factory
type ComponentOptions = {
	selector: string
}

function Component2(options: ComponentOptions) {
	return function(constructor: Function) {
	console.log('Component decorator called');
	constructor.prototype.options = options
	constructor.prototype.uniqueId = Date.now();
	constructor.prototype.insertInDOM = () => {
			console.log('Inserting the component in the DOM');
		};
	}
}
function Pipe(constructor: Function) {
	console.log('Pipe decorator called');
	constructor.prototype.pipe = true
}

@Component2({ selector: '#my-profile'})
@Pipe
class ProfileComponent2 {}

// Method decorator
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
	let original = descriptor.value as Function
	descriptor.value = function(...args: any) {
		console.log('Before');
		original.call(this, ...args)
		console.log('After');
		
	}
}
class Person3 {
	@Log
	say(message: string) {
		console.log('Person says ' + message);
		
	}
}

let person = new Person3()
person.say('Hello')

// Accessor decorator
function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
	let original = descriptor.get as Function
	descriptor.get = function() {
		const result = original?.call(this)
		return (typeof result === 'string') ? result.toUpperCase() : result
	}
}
class Person4 {
	constructor(public firstName: string, public lastName: string) {
		
	}
	@Capitalize
	get fullName() {
		return `${this.firstName} ${this.lastName}`
	}
}

let person4 = new Person4('Vasya', 'Pupkin')
console.log(person4.fullName)

// Property decorator

function MinLength(length: number) {
	return (target: any, propertyName: string) => {
		let value: string;
		let descriptor: PropertyDescriptor = {
			get() { return value; },
			set(newValue: string) {
				if(newValue.length < length) throw new Error(`${propertyName} should be at least ${length} chars long`)
				value = newValue
			}
		}
		Object.defineProperty(target, propertyName, descriptor)
	}
}
class User1 {
	@MinLength(4)
	password: string;
	constructor(password: string) {
		this.password = password
	}
}

let user1 = new User1('1234')


// Parameter decorator
type WatcherParameter = {
	methodName: string,
	parameterIndex: number
}

const watchedParameters: WatcherParameter[] = []
function Watch(target: any, methodName: string, parameterIndex: number) {
	watchedParameters.push({
		methodName,
		parameterIndex
	})
}
class Vehicle {
	move(@Watch speed: number) {}
}
console.log(watchedParameters);
