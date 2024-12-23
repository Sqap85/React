// 1. Değişkenler ve Tipler
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive: boolean = true;

// 2. Fonksiyonlar
function greet(name: string): string {//geri donecek tip string
    return `Hello, ${name}!`;
}

console.log(greet("Engin"));

// 3. Arrays ve Tuple
let numbers: number[] = [1, 2, 3, 4, 5];
let person: [string, number] = ["Alice", 30];

// Tuple ile daha fazla çeşitlilik:
let detailedPerson: [string, number, boolean] = ["Bob", 25, true];

// 4. Enum (Sıralı sabit değerler)
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
console.log(move); // 1

let directionName: string = Direction[2]; // Enum'un tersten çözülmesi
console.log(directionName); // "Down"

// 5. Interface
interface Person {
    name: string;
    age: number;
    greet(): string;
}

// Interface'in genişletilmesi
interface Employee extends Person {
    employeeId: number;
}

const person1: Person = {
    name: "Bob",
    age: 25,
    greet: function () {
        return `Hi, my name is ${this.name}.`;
    }
};

const employee1: Employee = {
    name: "Alice",
    age: 30,
    employeeId: 101,
    greet: function () {
        return `Hello, I'm ${this.name} and my employee ID is ${this.employeeId}.`;
    }
};

console.log(person1.greet());
console.log(employee1.greet());

// 6. Sınıf (Class)
class Car {
    make: string;
    model: string;
    year: number;

    // Constructor parametreleri zorunlu
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method
    displayInfo(): void {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }

    // Static method (örnek: sınıfa ait bir metod)
    static getCarInfo(car: Car): string {
        return `${car.year} ${car.make} ${car.model}`;
    }
}

const myCar = new Car("Tesla", "Model 3", 2020);
myCar.displayInfo();

// Static method örneği:
console.log(Car.getCarInfo(myCar));

// 7. Optional Properties
interface Product {
    id: number;
    name: string;
    price?: number; // Optional property
    discount?: number; // Opsiyonel özellik
}

const product1: Product = {
    id: 1,
    name: "Laptop"
};

const product2: Product = {
    id: 2,
    name: "Smartphone",
    price: 500
};

const product3: Product = {
    id: 3,
    name: "Headphones",
    price: 150,
    discount: 10
};

console.log(product1);
console.log(product2);
console.log(product3);

// 8. Type Assertion
let unknownValue: any = "This is a string";

// Type assertion (TypeScript'te türü güvenle dönüştürme)
let stringLength: number = (<string>unknownValue).length;  // Eski yöntem
let stringLengthAlt: number = (unknownValue as string).length;  // Yeni yöntem

console.log(stringLength);    // 17
console.log(stringLengthAlt); // 17

// 9. Union Types (Birden fazla tip)
type Status = "success" | "error" | "pending";
let currentStatus: Status;
currentStatus = "pending";  // geçerli
// currentStatus = "done";  // hata, çünkü "done" geçerli değil

// 10. Intersection Types (Birden fazla türün birleşimi)
type Address = {
    city: string;
    zipCode: string;
};

type User = {
    username: string;
    password: string;
};

type UserWithAddress = User & Address;  // Intersection type

const userWithAddress: UserWithAddress = {
    username: "john_doe",
    password: "password123",
    city: "New York",
    zipCode: "10001"
};

console.log(userWithAddress);

// 11. Type Guards (Tür Koruma)
function isProduct(item: any): item is Product {
    return (item as Product).price !== undefined;
}

const someItem = { id: 1, name: "Laptop" };

if (isProduct(someItem)) {
    console.log(someItem.price);  // Güvenle price'a erişebiliriz
} else {
    console.log("Bu bir ürün değil.");
}

// 12. Literal Types (Türlerin belirli değerleri)
type DirectionLiteral = "up" | "down" | "left" | "right";

let myDirection: DirectionLiteral = "up";
// myDirection = "forward";  // Hata, çünkü "forward" geçerli değil

// 13. Readonly Türleri
interface ReadOnlyProduct {
    readonly id: number;
    readonly name: string;
}

let product4: ReadOnlyProduct = { id: 101, name: "Tablet" };

// product4.id = 102;  // Hata, çünkü 'id' readonly

// 14. Default Parametreler
function greetPerson(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}

console.log(greetPerson());    // "Hello, Guest!"
console.log(greetPerson("Engin"));  // "Hello, Engin!"

// 15. Generic Types (Generic Türler)

// Generic tiplerle fonksiyonlar ve sınıflar oluşturulabilir.
// Bir fonksiyonun veya sınıfın tipi, çağrılırken belirlenebilir.

function identity<T>(value: T): T {
    return value;
}

let num = identity(42); // T burada number olur
let str = identity("Hello, TypeScript!"); // T burada string olur

console.log(num); // 42
console.log(str); // Hello, TypeScript!

// 16. Extending Types (Tipleri Genişletme)

// Bir türü genişletmek için extends anahtar kelimesi kullanılır.
// Interface ve tiplerde extend kullanarak daha spesifik türler yaratılabilir.

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}

let employee: Employee = {
    name: "John",
    age: 30,
    employeeId: 12345
};

console.log(employee);

// 17. Partial (Opsiyonel Özellikler)

// `Partial` kullanarak bir türdeki tüm özellikleri opsiyonel yapabilirsiniz.
// Bu, genellikle nesnelerin güncellenmesi veya bir kısmı ile çalışırken faydalıdır.

interface Product {
    id: number;
    name: string;
    price: number;
}

let updatedProduct: Partial<Product> = {
    name: "Updated Product"
};

console.log(updatedProduct);

// 18. Required (Tüm Özelliklerin Zorunlu Olması)

// `Required` ile bir türdeki tüm özelliklerin zorunlu hale getirilmesini sağlar.
// Özellikle opsiyonel özellikleri zorunlu hale getirmek için kullanılabilir.

interface User {
    username?: string;
    email?: string;
    isActive?: boolean;
}

let newUser: Required<User> = {
    username: "user123",
    email: "user123@example.com",
    isActive: true
};

console.log(newUser);

// 19. Pick (Bir Türden Belirli Özellikleri Seçme)

// `Pick` ile bir türden sadece belirli özellikleri alabilirsiniz.
// Bu, gereksiz özellikleri dışarıda bırakmanızı sağlar.

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

// `Pick` ile sadece `id` ve `title` özelliklerini seçiyoruz.
type TaskPreview = Pick<Task, "id" | "title">;

let taskPreview: TaskPreview = {
    id: 1,
    title: "Learn TypeScript"
};

console.log(taskPreview);

// 20. Omit (Bir Türden Belirli Özellikleri Çıkarma)

// `Omit` ile bir türden belirli özellikleri çıkarabilirsiniz.
// Bu, bir türden gereksiz özellikleri ortadan kaldırmak için kullanılır.

type TaskWithoutDescription = Omit<Task, "description">;

let taskWithoutDescription: TaskWithoutDescription = {
    id: 1,
    title: "Learn TypeScript",
    completed: false
};

console.log(taskWithoutDescription);

// 21. Complex Example: Generic Types with Partial, Required, Pick, and Omit

// Generic türü, Partial, Required, Pick ve Omit kombinasyonu
function updateUser<T>(user: T, updates: Partial<T>): T {
    return { ...user, ...updates };
}

let user = {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    isActive: true
};

// Sadece bazı özellikleri güncellemek için Partial kullanıyoruz.
let updatedUser = updateUser(user, { email: "john_new@example.com" });

console.log(updatedUser);

// Sadece belirli özellikleri almak için Pick kullanıyoruz.
type UserPreview = Pick<typeof user, "id" | "username">;

let userPreview: UserPreview = {
    id: 1,
    username: "john_doe"
};

console.log(userPreview);

// Omit kullanarak 'isActive' özelliğini çıkartıyoruz.
type UserWithoutActive = Omit<typeof user, "isActive">;

let userWithoutActive: UserWithoutActive = {
    id: 1,
    username: "john_doe",
    email: "john@example.com"
};

console.log(userWithoutActive);
