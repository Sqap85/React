/*
Literal types, TypeScript'te bir değişkenin veya parametrenin yalnızca belirli bir değer alabileceğini belirtmek için kullanılan bir özelliktir. Literal types, bir türü daha dar bir şekilde tanımlayarak sadece belirli değerleri kabul eder. Bu, TypeScript'in güçlü tip kontrolünü daha hassas hale getirir. */

// 1. String Literal Types
let direction: "up" | "down" | "left" | "right";

direction = "up";    // geçerli
direction = "left";  // geçerli
// direction = "forward";  // hata, çünkü "forward" geçerli bir değer değil

// 2. Number Literal Types
let statusCode: 200 | 404 | 500;

statusCode = 200;   // geçerli
statusCode = 404;   // geçerli
// statusCode = 300;  // hata, çünkü 300 geçerli bir değer değil

// 3. Boolean Literal Types
let isActive: true;

isActive = true;   // geçerli
// isActive = false;  // hata, çünkü yalnızca 'true' geçerli

// 4. Fonksiyonlarda Literal Types
function logStatus(status: "success" | "error" | "loading"): void {
    console.log(`Status: ${status}`);
}

logStatus("success");  // geçerli
logStatus("loading");  // geçerli
// logStatus("done");   // hata, çünkü "done" geçerli bir değer değil

// 5. Literal Types ve Nesnelerde Kullanımı
type UserRole = "admin" | "user" | "guest";

interface User {
    username: string;
    role: UserRole;
}

const user1: User = {
    username: "john_doe",
    role: "admin"  // geçerli
};

const user2: User = {
    username: "alice_smith",
    role: "guest"  // geçerli
};

// user2.role = "moderator";  // hata, çünkü "moderator" geçerli bir role değil

// 6. Literal Types ve Type Guards
function getDirection(direction: "up" | "down" | "left" | "right"): void {
    if (direction === "up") {
        console.log("Going up!");
    } else if (direction === "down") {
        console.log("Going down!");
    } else if (direction === "left") {
        console.log("Going left!");
    } else if (direction === "right") {
        console.log("Going right!");
    }
}

getDirection("up");    // Geçerli
getDirection("down");  // Geçerli
// getDirection("forward");  // Hata, çünkü "forward" geçerli değil

// 7. Literal Types ile Type Aliases Kullanımı
type Color = "red" | "green" | "blue";

let favoriteColor: Color;
favoriteColor = "green";   // geçerli
favoriteColor = "yellow";  // hata, çünkü "yellow" geçerli bir renk değil
