//     Higher Order Function
// It is a function that can take another function as an argument or return a function 


// function x(){
//     console.log("i am X");     // This is Callback function   (run after certain task)
//   }
  
//   function y(args){
//     console.log("I am y");   // This is Higher order function (taking fn and returning)
//     return args;
//   }
  
//   y(x);
  
  // HOF -> function as argument and can return function also
  // callback ->  function that is passed as an argument to another function and executed later.
  
  // Callback is also a Higher Order Function
  
  // Higher Order Function
  
//   data=[2,4,6,8,10];
  
//   const calculateDoubleData=function(data){
//     var output=[];
//     for(let i=0; i<data.length; i++){
//       output.push(data[i]*2);
//     }
//     return output;
//   }
//   const calculateHalfData=function(data){
//     var output=[];
//     for(let i=0; i<data.length; i++){
//       output.push(data[i]/2);
//     }
//     return output;
//   }
//   const calculateAddTen=function(data){
//     var output=[];
//     for(let i=0; i<data.length; i++){
//       output.push(data[i]+10);
//     }
//     return output;
//   }

//   console.log(calculateDoubleData(data));
//   console.log(calculateHalfData(data));
//   console.log(calculateAddTen(data));

  
const value=[2,9,16,42,71];
const diameter=function(value){
  return value*2;
}
const circumferance=function(value){
  return 2*3.14*value;
}
const area=function(value){
  return 3.14*value*value;
}

console.log(value.map(diameter));
console.log(value.map(circumferance));
console.log(value.map(area))
