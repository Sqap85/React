/*
Union types (Birleşim tipleri), TypeScript'te bir değişkenin birden fazla türde değer alabilmesine olanak tanır. Yani, bir değişkenin farklı türlerden birini kabul edebilmesi için union types kullanılır. Bu özellik, belirli bir değişkenin alabileceği değerlerin türlerini daha esnek bir şekilde belirlemenizi sağlar.

Union types, | (pipe) operatörü ile oluşturulur. Bu operatör, birden fazla türü birbirine bağlar */

// 1. Union Types Temel Kullanımı
let value: string | number;
value = "Hello";  // geçerli
value = 42;       // geçerli
// value = true;  // hata, çünkü 'boolean' türü yok

// 2. Union Type ile Fonksiyon
function printId(id: string | number): void {
    console.log("ID:", id);
}

printId("abc123"); // geçerli
printId(123456);   // geçerli
// printId(true);   // hata, çünkü 'boolean' türü yok

// 3. Union Types ile Array
let mixedArray: (string | number)[] = ["apple", 42, "banana", 100];
// mixedArray.push(true); // hata, çünkü 'boolean' türü yok

// 4. Union Type ve Type Guards
function printDetails(value: string | number): void {
    if (typeof value === "string") {
        console.log("String value:", value);
    } else {
        console.log("Number value:", value);
    }
}

printDetails("TypeScript is awesome!");  // String value: TypeScript is awesome!
printDetails(2024);  // Number value: 2024

// 5. Union Types ve Kullanıcı Tanımlı Tipler
type Admin = {
    role: "admin";
    permissions: string[];
};

type User = {
    role: "user";
    username: string;
};

type Person = Admin | User;

function printRole(person: Person): void {
    if (person.role === "admin") {
        console.log("Admin role with permissions:", person.permissions);
    } else {
        console.log("User role with username:", person.username);
    }
}

const admin: Admin = { role: "admin", permissions: ["manage-users", "edit-settings"] };
const user: User = { role: "user", username: "enginx" };

printRole(admin); // Admin role with permissions: ['manage-users', 'edit-settings']
printRole(user);  // User role with username: enginx
