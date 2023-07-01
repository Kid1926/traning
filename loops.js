// let akash ='Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri'
//  let Akasharray = akash("+")
//  console.log(split("+"))

 // let akash ='Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
// console








// var foo = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
// var arr = Array.from(foo);
// console.log(arr);










// var array = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
// var newArray = array.split('+').join('');
// console.log(newArray);











// const input = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
// const namesArray = input.split('+');
// console.log(namesArray);


// let arr=[5,2,8,1,10,20,18,0]
// // console.log(Math.min(...arr))
// // console.log(Math.max(...arr))
// let smallest=arr[0];
// let largest=arr.length-1;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]<=smallest)
//     {
//         smallest=arr[i];
//     }
//     else if(arr[i]>=largest)
//     {
//         largest=arr[i];
//     }
// }
// console.log(smallest)
// console.log(largest)

// let arr = [];
// let object1 ={
//      name: "akash",
//      age : 22,
//      rollno : 1,
//      dept : "mech" 

// }
// let object2 =
//  {
//     name: "priya",
//     age : 22,
//     rollno : 2,
//     dept :"csc"
// }
// let object3 =
// {
//     name:"dharshini",
//     age : 22,
//     rollno : 3,
//     dept : "csc"
// }

// function pushArr(object){
//     arr.push(object)
//     return arr;
// }
// pushArr(object1)
// pushArr(object2)
// pushArr(object3)
// console.log("Pushed Output ",arr);

// function popArr(){
//     arr.pop()
//     return arr;
// }

// popArr()

// console.log("Popped Output ", arr)





class Stack
{
     constructor()
    {
        this.items=[]
    }
    insert(element)
    {
        this.items.push(element)
    }
    remove()
    {
        return this.items.pop()
    }
}
class Queue
{
     constructor()
    {
      this.items=[]
    }
    enqueue(element)
    {
        this.items.push(element)
    }
    dequeue()
    {
        return this.items.shift()//returns element at the front of the queue
    }
}
function createArrays(option)
{
    if(option=="LIFO")
    {
        let arr=new Stack();
        arr.insert(10)
arr.insert(15)
arr.insert(20)
console.log(arr)
arr.remove()
console.log(arr)
    }
    else if(option=="FIFO")
    {
        let arr=new Queue();
        arr.enqueue(30)
        arr.enqueue(40)
        console.log(arr)
        arr.dequeue()
        console.log(arr)
    }
}
createArrays("LIFO")
createArrays("FIFO")

//Remove space found in string
// const arr ="apple orange lemon";
// spacestr = arr.split(" ").join("")
// console.log(spacestr);


//Write a program that will print the sum of diagonal elements of a 10X10 matrix. The program will take a total of 100 numbers as input (10 numbers will be input per line and each number will be separated by a space).

// const max =[[1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
//             [0, 1, 2, 3, 4, 5, 6, 7, 8, 0],
//             [3, 4, 5, 6, 7, 8, 9, 6, 4, 0],
//             [2, 3, 4, 5, 6, 7, 8, 9, 3, 2],
//             [3, 4, 5, 6, 7, 4, 3, 2, 1, 3],
//             [3, 4, 5, 6, 2, 40, 4, 2, 4, 6],
//             [2, 3, 4, 6, 2, 4, 6, 2, 3, 5],
//             [2, 3, 5, 6, 2, 4, 6, 20, 3, 5],
//             [2, 4, 6, 2, 1, 4, 3, 3, 5, 2],
//             [3, 3, 5, 2, 4, 6, 2, 1, 4, 6]];


// function diagonal(sum){
//     let arr =0;
//      for( i=0; i<sum.length; i++){
//            for(j=0; j<sum.length; j++){
//             if(i === j){
//          arr += sum[i][j];
//             }
//      }
//  }
//  return arr; 
// }

// const input = diagonal(max);
// console.log(input);

  

  
  
  
  
  
  