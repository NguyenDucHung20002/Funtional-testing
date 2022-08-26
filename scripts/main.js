

// var arr= [1,2,3,4,5,6,7]
// var n = arr.length
// var arr2=[]

// for(var i =0; i< Math.round(n/2);i++) {
//   if(i == (n-1-i)) {
//     arr2.push([arr[i]])
//   } else {
//     arr2.push([arr[i],arr[n-1-i]])
//   }
  
// }
// console.log(arr2)

// var arr= [[1,2],3,"1",4,56]
// arr.

// var arr= ["hello",3,"1",4,56]
// var n = arr.length
// var arr2=[]
// var v = 5
// Math.random(v)
// for(var i =0; i< arr.length;i++) {
    
//     if(!Number.isFinite(arr[i])){
//         arr2.push(arr[i])
//     }
// }
// console.log(arr2)

//-------------
// var arr = [5,2,3,3,2,2,3]
// var test = []
// var save_count = []
// var max = 0;
// for(i = 0;i < arr.length; i++){
//     test.push(0)
//     save_count.push(0)
// }
// for(i = 0;i<arr.length - 1;i++){
//     var count = 1
//     for(j = i + 1; j < arr.length; j++){
//         if(arr[i] === arr[j] && test[j] === 0)
//         {
//             test[j] = 1
//             count++
//         }
//     }
//     if(test[i] === 0){
//         console.log("so ",arr[i]," lap",count," lan" )
//         save_count[i] = count
//         max = Math.max(max, save_count[i])
//     }
// }
// for(i = 0;i<arr.length;i++){
//     if(max === save_count[i]){
//         console.log("so lan lap nhieu nhat la:",arr[i],"voi so lan lap la:",save_count[i])
//     }
// }

//--------------
// var a = ["bao","thuan","an","minh","toan","ly"]
// var ten = []
// for(i = 0; i < a.length; i++){
//     for(j = 0;j<a[i].length; j++){
//         if(a[i][j] === 'a' && a[i].length >=3 && a[i].length <= 5){
//             ten.push(a[i])
//         }
//     }
// }
// console.log(ten)

// kiem tra trong ma co so nguyen to khong
// var a = [3,7,5]
// var b = true
// for(i = 0; i < a.length; i++){
//     var count = 0;
//     for(j = 2; j <= Math.sqrt(a[i]); j++){
//         if(a[i] % j == 0){
//             count++;
//         }
//     }
//     if(count > 0){
//         b = false
//         break;
//     }
// }
// console.log(b)
