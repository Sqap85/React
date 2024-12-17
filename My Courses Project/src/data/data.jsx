import eng from '../assets/images/eng-course.png';
import sol from '../assets/images/sol-course.png';
import js from '../assets/images/js-course.png';
import react from '../assets/images/react-course.png';

//Kurs bilgilerini tutan bir dizi oluşturur.
export const courses = [
    {
        id: 1,
        title: "English Mastery Course",
        description: "Learn to speak and write English fluently in just 85 days. Improve grammar, vocabulary, and communication skills step by step.",
        price: 85,
        link: "https://www.youtube.com/watch?v=MQsh6-eRLvA&pp=ygUOZnVjayB0aGUgd29ybGQ%3D",
        image: eng
    },
    {
        id: 2,
        title: "JavaScript for Beginners",
        description: "Start your journey into coding with JavaScript. Learn the basics of programming and build dynamic websites with ease. Hint: 85% of developers love JS!",
        price: 185,
        link: "https://www.youtube.com/watch?v=MQsh6-eRLvA&pp=ygUOZnVjayB0aGUgd29ybGQ%3D",
        image: js
    },
    {
        id: 3,
        title: "React Developer Bootcamp",
        description: "Master React and build stunning, fast web applications. Join 85+ successful developers who transformed their careers.",
        price: 85,
        link: "https://www.youtube.com/watch?v=MQsh6-eRLvA&pp=ygUOZnVjayB0aGUgd29ybGQ%3D",
        image: react
    },
    {
        id: 4,
        title: "Solidity and Smart Contracts",
        description: "Dive into blockchain development with Solidity. Learn to create secure smart contracts and join the top 85% of blockchain innovators.",
        price: 850,
        link: "https://www.youtube.com/watch?v=MQsh6-eRLvA&pp=ygUOZnVjayB0aGUgd29ybGQ%3D",
        image: sol
    }
];

export default courses;