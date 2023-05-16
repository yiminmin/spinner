//use a loop and array to reduce reptition
let delay = 100;
const symbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
for (let i = 0; i < symbols.length * 2; i++) {
  setTimeout(() => {
    process.stdout.write(symbols[i % symbols.length]);
  }, delay);
  delay += 200;
};

// setTimeout(() => {
//   process.stdout.write('\r|   ')
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ')
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ')
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\  ')
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);