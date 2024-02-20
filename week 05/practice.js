
// let numbers = [1, 2, 3, 4, 5];
// let fruit = ['apple', 'orange', 'banana', 'pineapple'];
//     // numbers.push(0);
//     // numbers.pop(2);
//     // numbers.pop(3);
//     // numbers.pop(1);
//     // console.log(numbers.shift());
//     // numbers.unshift(7);
//     // c= numbers.concat(fruit);
//           //   console.log(fruit);
//         //console.log(numbers.slice(2));
//        //      console.log(numbers.splice(1));
//      //console.log(numbers.indexOf(1));
//    // console.log(numbers.lastIndexOf(5));
//  //   console.log(numbers.includes(3));

// // const fruits = ["Banana", "Orange", "Apple", "Mango" , "pineapple"];
//  //const keys = Object.keys(fruits);
//  //console.log(keys);
 
//   //  const person = {
//     //    firstName: "kashif",
//       //  lastName: "hussain",
//       // age: 22,
//       //  eyeColor: "blue"
//       //};
//      for(const element of arr )
//       const obj={};
//       obj[1]=1;
//       console.log(obj);
//       obj[1]=100;
//       console.log(obj);
//       obj[1]++;
//       console.log(obj);
      
      
//       if(obj[1]){
//         console.log("key found")
//   }
//   else
//   {
//       console.log("key not found")
//   }
//   if(obj[0]){
//     console.log("key found")
// }
// else
// {
//   console.log("key not found")
// }
// console.log(obj[0]);



//const element= arr[i];
//if(obj[element]){
    //obj[element]++;
  //  console.log("defined");
//}
//else{
  //  console.log(obj[element]=1);
//}


const arr = [['id1','kashif'],['id2', 'ali'],['id3', 'riaz'],['id4', 'shareeeeeeeeeeeeemmmmm'] ]
const obj = {};

for (const element of arr) {
  if (obj[element]) {
    obj[element]++;
  } else {
    obj[element] = 1;
  }
}
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

const array=[1,2,3,4,56,7];
array.forEach(function(item)
{
    console.log(item);
    return item;

})



const array1=[1,2,3,4,56,7];
var map=array1.map(function(item)
{
    return item+10;
})
    console.log(map);

