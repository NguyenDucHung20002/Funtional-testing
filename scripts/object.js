// var users = ["David", "Ken", "David", "Ken", "Maria", "Tokuda", "Ongnoi"]
// function occurCount(str) {
//     var res ={}
//     for(var i =0; i < users.length; i++) {
//         if(users[i] in res){
//             res[users[i]]++
//         }else{
//             res[users[i]] = 1
//         }
//     }
//     return res
// }

// var res = {}
// users.forEach((element) => {
//     if(res[element]){
//         res[element]++
//     }else{
//         res[element] = 1
//     }
// })
// var coins = [10,200,300,450]

// var totalcoin = coins.reduce(function(total, coin){
//     return total + coin
// }, 0)

// var totalcoin = coins.map(function(){
    
// })
// console.log(totalcoin)
// var abc = "abcdefghijklmnopqrstuvwxyz"
// function checkAbc(string){
//     if(typeof(string) === "string"){
//         for(i=0;i<abc.length;i++){
//             var count = 0
//             for(j = 0; j<string.length;j++){
//                 if(string[j] == abc[i]){
//                     count++
//                 }
//             }
//             console.log(count)
//             if(count === 0){
//                 return false 
//             }
//         }
//         return true
//     }else{
//         return "Undefined"
//     }
// }

// var string = "a The quick brown fox jumps over the lazy dog"
// console.log(checkAbc(string))

// var users = [
//     {
//         id: 1,
//         name: "David",
//         age: 10
//     },
//     {
//         id: 2,
//         name: "Beckham",
//         age: 18
//     },
//     {
//         id: 3,
//         name: "Messi",
//         age: 20
//     },
//     {
//         id: 4,
//         name: "Cr7",
//         age: 20
//     }
// ]

//b1
// var result = users.filter((val, idx) => {
//     return val.name.includes('e')
// }).map((val, idx) => {
//     var temp = `${val.name} - ${val.age}`
//     return temp
// })
// console.log(result)

// bt 1
// var countWords = ['web' , 'thay' ,'nhat']
// console.log(countWords.reduce((acc, val) => {
//     if(val.length >= 4){
//         return acc + 1 
//     }
//     return false
// }, 0))

// bt 2
// const productList = [
//     { id: 1, name: 'iphone X', isFreeShip: true , price: 10000 },
//     { id: 2, name: 'iphone 16 Pro', isFreeShip: true, price: 20000 },
//     { id: 3, name: 'iphone 20 Pro', isFreeShip: false , price: 40000 },
// ];
// console.log(productList.filter((val) => {
//     return val.isFreeShip === true, val.price > 20000
// }).map((val) => {
//     return val
// }))

// bt 3
// const cartItemList = [
//     { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
//     { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
// ];
// console.log(cartItemList.reduce((acc, val) => {
//     return acc + val.product.price * val.quantity
// }, 0))

// bt 4
// const users1 = [
//     {
//       name: "Nguyen Thi Phuong Thao",
//       age: 28,
//       gender: "female",
//       city: "HCM",
//     },
//     {
//       name: "Tran Van Teo",
//       age: 30,
//       gender: "male",
//       city: "Ha Noi",
//     },
//     {
//       name: "Nguyen Phuong Hoa",
//       age: 20,
//       gender: "female",
//       city: "Hai Phong",
//     },
//     {
//       name: "Nguyen Van Nam",
//       age: 22,
//       gender: "male",
//       city: "Hai Phong",
//     },
//     {
//       name: "Ho Diem My",
//       age: 23,
//       gender: "female",
//       city: "Long An",
//     },
//     {
//       name: "Nguyen Thi Thuong",
//       age: 38,
//       gender: "female",
//       city: "HCM",
//     },
//   ];

// bt 4
// var average = users1.filter((val) =>{
//     if(val.age <= 30 && val.age >= 20 && val.gender === 'female'){
//         return val
//     }
//     return false
// })
// console.log(Math.round(average.reduce((acc, val) =>{
//     return acc + val.age
// }, 0) / average.length))

// bt 5
// console.log(users1.map((val) =>{
//     var index = val.name.indexOf(" ")
//     return val.name.slice(index + 1,val.name.length)
// }))
