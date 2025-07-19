// напиши tsc в терминале и получишь скомпилированный код
// Built-in types
let sales = 123456789; // тип автоматически присвоен
let course: string = 'TypeScript';
let is_published: boolean = true;

// any
let level; // any
// array
let numbers: number[] =  [1,2,3] 
// tuple - массив фиксированной длины с обозначенными типами
let user: [number, string, boolean] = [1, 'Vasya', true]
// enum
enum Size {
	Small = 1,
	Medium,
	Large
}
let mySize: Size = Size.Medium
// functions
function calculateTax(income: number, taxYear: number): number {
	if(taxYear < 2022) {
		return income * 1.2
	}
	return income * 1.3
}
calculateTax(10000, 2022)
// objects
let employee: {
	readonly id: number,
	name?: string,
	retire: (date: Date) => void
} = { 
	id: 1,
	name: 'Vasya',
	retire: (date: Date) => {
		console.log(date)
	}
}
employee.name = 'Al'