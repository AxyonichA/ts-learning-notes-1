// Generics class
class KeyValuePair<K, V> {
	constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, string>('1', 'Vasya');


// Generic function
class ArrayUtils {
	static wrapInArray<T>(value: T) {
		return [value];
	}
}

let numberArr = ArrayUtils.wrapInArray(1);
let stringArr = ArrayUtils.wrapInArray('Vasya');



// Generic interface
interface Result<T>{
	data: T | null,
	error: string | null
}

function fetch<T>(url: string): Result<T> {
	console.log(url);
	
	return {
		data: null,
		error: null
	}
}

interface User {
	username: string
}
interface Product {
	title: string
}

let result = fetch<User>('url')
console.log(result.data?.username)
let result2 = fetch<Product>('url')
console.log(result2.data?.title)



// Generic constraint
class PersonA {
	constructor(public name: string) {}
}

class CustomerA extends PersonA {}

function echo<T extends PersonA>(value: T): T {
	return value;
}

console.log(echo(new CustomerA('Vasya')));



// Extending generic class
interface Product2 {
	name: string;
	price: number;
}

class Store<T> {
	protected _objects: T[] = [];
	add(obj: T): void {
		this._objects.push(obj);
	}

	// keyof
	find(property: keyof T, value: unknown): T | undefined{
		return this._objects.find(obj => obj[property] === value);
	}
}

let store = new Store<Product2>();
store.add({ name: 'A', price: 100 });
store.find('name', 'A');
class CompressibleStore<T> extends Store<T> {
	compress() {}
}

class SearchableStore<T extends {name: string}> extends Store<T> {
	// override find(name: string): T | undefined {
	// 	return this._objects.find(obj => obj.name === name);
	// }
}

class ProductStore extends Store<Product2> {
	filterByCategory(category: string): Product2[] {
		console.log(category);
		
		return [];
	}
}

// Type mapping
type ReadOnly<T> = {
	readonly[K in keyof T]: T[K]
}
type Optional<T> = {
	readonly[K in keyof T]?: T[K]
}
type Nullable<T> = {
	readonly[K in keyof T]: T[K] | null
}
let product: ReadOnly<Product2> = {
	name: 'a',
	price: 1
}