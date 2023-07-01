// const myPromise = new Promise((resolve, reject) => { 
//     const randomNum = Math.floor(Math.random() * 2);

//     console.log(randomNum)

//     if(randomNum === 0) {

//        resolve();

//     } else {

//        reject();
//     }
// })

//     myPromise.then(() => console.log('Success')).catch(() => 
//     console.log('Failure'))









// function name(){
//   let x= a+b;
//   console.log(x);
// }








// const createUser = (user) => {

//     return new Promise((res, rej) => {

//         setTimeout(() => {
//             users.push(user);
//             if(false) {
//                 res();
//             }
//     else{
//                 rej("error")


//             }
//         } 
//     , 1000);

// })
// }
//     createUser({ id:3,name: "C"}).then(getUser).catch(e => console.log(e));  
  

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  




  // let myPromise = new Promise(function(myResolve, myReject) {
  //   let x = 0;
  
  // // some code (try to change x to 5)
  
  //   if (x == 0) {
  //     myResolve("OK");
  //   } else {
  //     myReject("Error");
  //   }
  // });
  
  // myPromise.then(
  //   function(value) {myDisplayer(value);},
  //   function(error) {myDisplayer(error);}
  // );
















// async function myfun(){return "hai";}
// myfun().then(
//     function(value){display(value);},
//     function(error){display(error);}
// );
// function display(some){
//     console.log(some);
// }async function myfun(){return "hai";}
// myfun().then(
//     function(value){display(value);},
//     function(error){display(error);}
// );
// function display(some){
//     console.log(some);
// }async function myfun(){return "hai";}
// myfun().then(
//     function(value){display(value);},
//     function(error){display(error);}
// );
// function display(some){
//     console.log(some);
// }






// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       setTimeout(function() {resolve("I like you");}, 3000);
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   myDisplay();




// async function getFile() {
//   let myPromise = new Promise(function(resolve) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         resolve(req.response);
//       } else {
//         resolve("File not Found");
//       }
//     };
//     req.send();
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }

// getFile();


 




let arr=[5,2,8,1,10,20,18]
// console.log(Math.min(...arr))
// console.log(Math.max(...arr))

let smallest=arr[0];
let largest=arr.length-1;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]<=smallest)
    {
        smallest=arr[i];
    }
    else if(arr[i]>=largest)
    {
        largest=arr[i];
    }
}
console.log(smallest)
console.log(largest)