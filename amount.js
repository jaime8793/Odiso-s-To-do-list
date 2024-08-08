const contributions = [
    5000, 3000, 500, 800, 2000,
    1000, 500, 500, 1000, 3000,
    1000, 700, 2000, 500, 500,
    500, 2500, 500, 1000, 500,
    1000, 500, 1000, 500, 1000,
    1000, 1000, 600, 500, 500,
    500, 400, 1500, 600, 1000,
    3000
];

const total = contributions.reduce((sum, amount) => sum + amount, 0);

console.log(`The total amount of contributions is ${total} Kenyan Shillings.`);