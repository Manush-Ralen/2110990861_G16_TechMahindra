// function a(){
//     console.log("first");
// }
// function a(){
//     console.log("Function a")
// }
// function b(x){
//     console.log("Function b");
//     a();
// }
// b((a));

// const button1 =document.getElementById('bt1');
// const button2 =document.getElementById('bt2');
// const button3 =document.getElementById('bt3');
// const button4 =document.getElementById('bt4');
// const button5 =document.getElementById('bt5');

// button1.addEventListener("click",function(){
//     let count=0;
//     count++;
//     console.log("button has been clicked");
//     console.log(count);
// })
// button2.addEventListener("click",function(){
//     let count=0;
//     count++;
//     console.log("button has been clicked");
//     console.log(count);
// })
// button3.addEventListener("click",function(){
//     let count=0;
//     count++;
//     console.log("button has been clicked");
//     console.log(count);
// })
// button4.addEventListener("click",function(){
//     let count=0;
//     count++;
//     console.log("button has been clicked");
//     console.log(count);
// })
// button5.addEventListener("click",function(){
//     let count=0;
//     count++;
//     console.log("button has been clicked");
//     console.log(count);
// })
// Task -> 
function reachedRestaurant(callback){
    console.log("You reached");
    setTimeout(callback,1000);
  }
  
  function tableFinding(callback){
    console.log("Table Finding");
    setTimeout(callback,1000);
  }
  
  function menuDiscover(callback){
    console.log("Menu Discover")
    setTimeout(callback,1000);
  }
  
  function priceCheck(callback){
    console.log("Price Check");
    setTimeout(callback,1000);
  }
  
  function starterOrder(callback){
    console.log("Starter Order");
    setTimeout(callback,1000);
  }
  
  function mainCourse(callback){
    console.log("Main Course");
    setTimeout(callback,1000);
  }
  
  function dessert(callback){
    console.log("Dessert");
    setTimeout(callback,1000);
  }
  
  function payBill(callback){
    console.log("Pay Bill");
    setTimeout(callback,1000);
  }
  reachedRestaurant(()=>{
    tableFinding(()=>{
      menuDiscover(()=>{
        priceCheck(()=>{
          starterOrder(()=>{
            mainCourse(()=>{
              dessert(()=>{
                payBill(()=>{               
                })
              })
            })
          })
        })
      })
    })
  })

