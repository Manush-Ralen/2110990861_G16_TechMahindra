// Reduce -> returns does n't returns an array,it returns a single value 

// var sumOfArr=0;
// const arr=[5,4,7,3,1,8];

// for(let i=0; i<arr.length; i++){
//   sumOfArr+=arr[i];
// }

// console.log(sumOfArr);
// arr.reduce(function(acc,curr){// accumulator -> maintain state & count  current ->iteration
//   acc+=curr
//   return curr;
// },0);  // Initial Value
// console.log(ans);
// const users = [
//     { firstName: "Pratiyush", lastName: "Ray", age: 25 },
//     { firstName: "Piyush", lastName: "Saini", age: 22 },
//     { firstName: "Sahil", lastName: "Aggarwal", age: 25 },
//     { firstName: "Ayush", lastName: "Jawa", age: 28 },
//     { firstName: "Daksh", lastName: "Singh", age: 40 },
//     { firstName: "Agamjot", lastName: "Singh", age: 26 },
// ];

// let ageCount = {};

// users.forEach(user => {
//     ageCount[user.age] = (ageCount[user.age] || 0) + 1;
// });

// console.log(ageCount);
// dataMap=[2,5,7,8,3,7]
// var maxNumber=0;
// for(let i=0;i<dataMap.length;i++){
//     if(maxNumber<dataMap[i]){
//         maxNumber=dataMap[i];
//     }
// }
// console.log(maxNumber);
// dataMap=[2,5,7,10,3,7]
// const ans=dataMap.reduce(function(acc,curr){
//     if(curr>acc){
//       acc=curr;
//     }
//     return acc;
//   })
//   console.log(ans)
// createOrder(cart,callback){
//     console.log("ORDER CREATION")
//     orderPayment(orderId,callback){
//       console.log("ORDER PAYMENT")
//       orderSummary(orderId,callback){
//         console.log("ORDER SUMMARY");
//         updateWallet(){
//           console.log("WALLET UPDATED");
//         }
//       }
//     }
//   }
// const cart=["shoes","watches","bags","glasses","shirts"];

// createOrder(cart,callback){
//   console.log("ORDER CREATION")
//   orderPayment(orderId,callback){
//     console.log("ORDER PAYMENT")
//     orderSummary(orderId,callback){
//       console.log("ORDER SUMMARY");
//       updateWallet(){
//         console.log("WALLET UPDATED");
//       }
//     }
//   }
// }


// console.log(createOrder(cart))
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet())

// function createOrder(cart){
//  const myPromise=new Promise(function(resolve,reject){
//   if(cart.length>0){
//     resolve(12345);
//   }else{
//     const err=new Error("Order Failed")
//     reject(err.message);
//   }
//  });
//  return myPromise
// }


// createOrder(cart)
// .then(function orderPayment(orderId){
//   console.log("Order Payment Successful")
// })
// .then(function orderSummary(orderId){
//   console.log("Order Summary",orderId)
// })
// const shoes=["Nike","Addidas","Puma","Jordan","Skechers"]

// function createOrder(shoes){
//   const shoesPromise=new Promise(function(res,rej){
//     if(shoes.length>0){
//       res("6856050");
//       console.log("Order Created");
//     }else{
//       const err=new Error("Order Rejected")
//       rej(err.message)
//     }
//   })
//   return shoesPromise;
// }

// console.log(createOrder(shoes))



  