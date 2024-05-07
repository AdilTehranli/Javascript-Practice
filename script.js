"use strict";
//1-dən 10-a qədər ədədlərin cəmini (hasilini) tapın.
// let sum=0;
// let hasil =1;
// for (var i = 1; i <=10;i++){
//     sum+=i
//     hasil*=i
// }
// console.log(hasil ,sum);

// 1-dən100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın
// let sum =0;
// let mult =1;
// for (var i = 1; i <=100;i++){
//     if(i%2==0){
//         sum +=i
//         mult*=i
//         console.log(i);
//     }

// }
// console.log(mult);
// console.log(sum);

// 3 rəqəmli ədədlərin ədədi ortasını tapın
// let sum = 0;
// let count =0;
// for (var i = 100; i <=999;i++){
//     sum +=i
// count++
// }
// console.log(sum/count);

// 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın

// for (var i = 100; i <=999;i++){
//     if(i%7==0 && i%8==0){
//         console.log(i);
//     }
// }
// 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın
// let sum = 0;
// for (var i = 100; i <=999;i++){
//         if(i%7==0 && i%8==0){
//             sum+=i;
//         }
//     }
//     console.log(sum);

// 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın
// for (var i = 100; i <=999;i++){
//         if(i%7==0 && i%8==0){
//             console.log(i);
//             break;
//         }
// }

// // 3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.
// for (var i =999; i>=100;i--){
//             if(i%7==0 && i%8==0){
//                 console.log(i);
//                 break

//             }
//         }

// 1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın
// let bolen;
// for (var i = 1; i<=100; i++){
//     if(i==1){
//         console.log(i+"ne sade ne murekkeb");
//     }
//     else{
//         bolen=0;
//         for (var j = 1; j<=i;j++){
//             if(i%j==0){
//                 bolen++;
//             }
//         }
//         if(bolen==2){
//             console.log(i+"sadedir");
//         }else{
//             console.log(i+ "murekkebdir");

//         }
// }
// }

// İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.
// let num=Number(prompt("Cut ve tek eded daxil edin"))
// if(num%2==0){
//     alert("cutdur")
// }else{
//     alert("tekdir")
// }

// 19.Daxil edilen temperatura esasen havanin isti, cox isti, soyuq, cox soyuq oldugunu gosterin.
// let temp= Number(prompt("Enter temperature"));
// if(temp<=0){
//         alert("cox soyuq")
// }else if(temp<=15){
//     alert("soyuq")
// }else if(temp<=30){
//     alert("isti")
// }else if(temp>=30){
//     alert("cox isti")
// }else{
//     alert("Tempuratur sehvdir")
// }

// Daxil edilen rəqəmə görə həftənin günlərini çıxardan program yazın
// let day = Number(prompt("Enter a number from 1 to 7"));
// switch (day) {
//   case 1:
//  console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//     default:
//         day="something have wrong"
// }

// Daxil edilen ayların sıra nömresinə əsasən hansı fəsil olduğunu tapın.
// let month = Number(prompt("Enter a number from 1 to 12"));
// switch (month) {
//   case 1:
//     console.log("yanvar");
//     break;
//   case 2:
//     console.log("fevral");
//     break;
//   case 3:
//     console.log("mart");
//     break;
//   case 4:
//     console.log("aprel");
//     break;
//   case 5:
//     console.log("may");
//     break;
//   case 6:
//     console.log("iyun");
//     break;
//   case 7:
//     console.log("iyul");
//     break;
//   case 8:
//     console.log("avgust");
//     break;
//   case 9:
//     console.log("sentiyabr");
//     break;
//   case 10:
//     console.log("oktyrabr");
//     break;
//   case 11:
//     console.log("noyabr");
//     break;
//   case 12:
//     console.log("dekabr");
//     break;
//   default:
//     month = "something have wrong";
// }

// 3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.
// for (var i = 100;i<=999;i++){
//     if(i%7==0 && i%8==0){
//         console.log(i);
//     }

// }

// İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli
// tətbiq edib nəticəni ekrana çıxarın.
// let a = Number(prompt("1 ci reqemi yazin"))
// let b = Number(prompt("1 ci reqemi yazin"))
// let calc = a * b;
// alert(`cavab: ${a} * ${b} : ${calc}`)

// let array =[1,2,3,4,5]
// for (let i = 0; i <= array.length;i++){
//     if(array[i] != 0) {
//         array.splice(i,4);
//     }
// }
// console.log(array);

// 1. Array elementlərinin cəmini / hasilini tapın
// let arr=[1,2,3,4,5]
// let sum = 0;
// let hasil = 1;
// for (let i = 0; i < arr.length; i++){
//     sum +=arr[i]
//     hasil*=arr[i]
// }
// console.log(sum)
// console.log(hasil)

// 2. Array elementlərinin içində təkrarlanan elementləri silin
// let array =[1,1,2,2,3,4,3,3,2,2,2,2,5]
// for (let i = 0; i < array.length;i++){
//    for (let j = i+1; j<array.length;j++){
//     if(array[i]==array[j]){
//         array.splice(j,1)
//         j--
//     }
//    }
// }
// console.log(array);

// 3. Array elementlərində ədəd olmayan elementləri silin
// let array = [1,"s","d",true,null,undefined,false,"adil",4,7]
// for (let i = 0 ; i < array.length; i++ ){
//    if(!Number.isInteger(array[i])){
//        array.splice(i ,1)
//        i--
//    }
// }
// console.log(array)

// 4. Array elementlərindən maksimum/minimum olanı tapın.
// let array = [-2, -6, -8, -9, -5, -10, 0, 5, 2, 8];
// let min = array[0]
// let max = array[0]
// for(let i = 0 ; i < array.length;i++){
//     if(array[i]>max){
//         max = array[i]
//     }else if(array[i]<min){
//         min = array[i]
//     }
// }
// console.log("Maksimum: "+max+" Minimum: "+min)

// 5. Daxil edilən cumlədəki simvol sayını çıxarın.
// let string ="Hello World"  // string.length
// let count = 0
// for(let i=0; i<string.length;i++){
// if(string[i]!=" "){
//     count++
// }
// }
// console.log(count);
// console.log(string.length);

// 6. Array elementlerini 2-yə vurub yeni bir array kimi çap edin.
// let arr=[1,2,3,4,5,6,7,8,9];
// let newArr=[]
//  for(let i=0;i<arr.length;i++){
//    newArr.push(arr[i],arr[i+1])
// }
// console.log(newArr);