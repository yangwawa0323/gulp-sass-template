class Person {
	constructor(name) {
		this.name = name;
	}
	hello() {
		if (typeof this.name === 'string') {
			return `[Person]: Hello, I am ${this.name} !`;
		} else {
			return `Hello!`;
		}
	}
}

var yangwawa = new Person('Yangwawa0323');

let username = 'yangwawa0323@163.com';
let info = document.createTextNode(`${yangwawa.hello()}`);

document.body.appendChild(info);
