
const person ={
    name : "kashif",
    gender : "male",
    age:22

}
const obj=person;
obj.name="kashi";
console.log(person);
console.log(obj);

const {name, age ,... rest} = obj;
console.log(name);
console.log(age);
console.log(rest);


console.log('Starting setTimeout example...');
setTimeout(() => {
    console.log('This message will be displayed after 2 seconds.');
}, 2000); // 2000 milliseconds = 2 seconds
console.log('setTimeout example scheduled.');

function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
    resolve(data);
    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
    //reject({ message:'i am error'})
    });
    }
    // Consuming the Promise
    getData()
    .then(data => {
    console.log('Data received:', data);
}) 
.catch(error => {
console.error('Error:', error.message);
});
//  getData();
 
console.log('i am after promise');
console.log(getData());
