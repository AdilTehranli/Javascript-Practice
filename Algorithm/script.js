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

// 7. Array elementlərini tərsinə çap edin.
// let arr=[1,2,3,4,5]
// function reverseArray(arr){
//     let reversedArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArr.push(arr[i]);
//       }
//       return reversedArr;
// }
// console.log(reverseArray(arr));

// 8. Verilmiş massivlərdə hər bir indeks dəyərinin cəmini hesablayan
// JavaScript proqramı yazın.(Massivlərin uzunluqları mütləq eyni olmalıdı)
// let arr1=[1,0,2,3,4];
// let arr2=[3,5,6,7,8];

// let sum= arr1.map(function(num,id){
//     return num + arr2[id]
// })
// console.log(sum);

// 9. Sözü tərsinə çevirən program yazın.
// let text="Hello World"
// let reserved = ""
// for (let i= text.length -1; i>0 ; i--){
//     reserved+=text[i]
// }
// console.log(reserved);

// // 10. Cümlədəki sözlərin yerini tərsinə çevirən program yazın.
// let text = "Salam menim adim leyladir"
// function ReverseApp() {
//     return text.split(" ").reverse().join(" ").split("  ").reverse().join(" ")
// }
// console.log(ReverseApp());

// let text = "Salam menim adim leyladir. men artiq proqramladirma kursuna baslamisam. bu yolda mene destek olan yaxinlarima tesekkur edirem"

// function reverseString(text) {
//     let reversed = '';
//     for (let i = text.length - 1; i >= 0; i--) {
    
//       reversed += text[i]
//     }
//     return reversed;
//   }
//   console.log(reverseString(text));


// 11. Daxil edilmiş ədədi sözlə yazan funskiya (Məsinput:1, output : Bir)
// function wordNumber(number){
//     switch(number){
//          case 1:
//              return 'Bir';
//          break;
//          case 2:
//              return 'İki';
//          break;
//          default:
//              return `${number} say`;
//      }
// }
// console.log(wordNumber(1));

// 12. Verilmiş mətndə sözlərin sayını tapın.
// function wordsLen(str) { 
//     const array = str.trim().split(/\s+/); 
//     return array.length; 
// } 
// const str = "Salam dünya lorem Salam dünya lorem Salam dünya lorem Salam dünya lorem Salam dünya lorem Salam dünya lorem Salam dünya lorem Salam dünya lorem Salam dünya lorem Salam dünya lorem Salam dünya lorem Salam dünya lorem "; 
// console.log(wordsLen(str));

// 13. Verilmiş cümlədə artıq boşluq simvollarını silin
// let word = "Salam men gele bilmeyecem"
// function removeSpaces(word){
//    return word.split(" ").join("")
// }
// console.log(removeSpaces(word))

// 14. Verilmiş mətndə cümlələrin ilk sözündə olan baş hərfin böyük yazılmasını
// təmin edən proqram yazın
// let sentence = "bu bir cümədir bu daqiqada işləmir."
// function capitalizeFirstLetter(sentence){
//     return sentence.charAt(0).toUpperCase()
// }
// console.log(capitalizeFirstLetter(sentence))

// 15. İki arrayın eyniliyini yoxlayın.
// let arr1 = [1,2,3,4,5]
// let arr2 = [1,2,3,4,5]
// if (JSON.stringify(arr1) == JSON.stringify(arr2))
//     console.log("True");
// else
//     console.log("False");
                  
             
    
// 16. Array elementlərini sort metodundan istifadə etmədən artma / azalma
// istiqamətinə görə sıralayın (bubble sort)
// function SortArray(array) {
//         for (var i = 0; i < array.length; i++){
//             for (var j= 0;j<array.length;j++){
//                 if(array[i]>array[j]){
//                     var temp = array[i];
//                     array[i]=array[j];
//                     array[j]=temp;
//                 }
//             }
//         }
//         return array;
// }
// let myArr = [9,8,7,6,5,4,3,2,1];
// console.log(SortArray(myArr));

// 17. İstifadəçidən ədəd daxil etməyini tələb edin. Proqram daxil edilən ədədi
// oxuyur və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir. Məs:
// Giriş: 3456 Çıxış: 3 4 5 6
// let numberInput = prompt("Enter a number","")
// function printNumberWithSpaces(numberInput){
//     return numberInput.split('').join(' ')
// }
// console.log(printNumberWithSpaces(numberInput))

// 18. Verilmiş mətndə təkrarlana sözlərin sayını tapın
const  sentence = "The quick fox quick brown brown fox fox jumps over the lazy dog"
const chars = {}
// console.log(chars.name);
// console.log(chars["name"]);
const arr = sentence.split(' ')
for(let i=0;i<arr.length;i++){
    if(!chars[arr[i]]){
        chars[arr[i]] = 1
    }else{
        chars[arr[i]]++
    }
}
console.log(chars);



// 23. Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin.
// let str = "ADNA";
// str = str.replace("ADNA", "ADNSU");
// console.log(str)

// let products= [
//     {
//         name:"apple",
//         price : 1.2,
//         count:3
//    },
//    {
//     name:"computer",
//     price: 123,
//     count:5
// },
// {
//     name:"computer",
//     price: 123,
//     count:5
// }
// ]

// function getTotal() {
//     return this.count*this.price
// }
// products.forEach(item=>{
//      console.log( getTotal.call(item));
   
// })


// 1. Array daxilində tək yerdə duran elementləri ekrana verin
// let arr=[0,4,7,8]
// console.log(...new Set([...arr]))

// 2. Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin
// let nums = [10,20,30,40,9,7];

// for(let i = 0;i<nums.length;i++){
//     if (nums[i]%5){
//         continue;
//         }else{
//             console.log(nums[i]);

//     }
// }

// 3. Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.
// let numbers= [6,10,14,18,21,25,35,40,42,49];   // edilmelidi
// if(numbers % 7==0){
// for(let i=0; i<numbers.length - 1 ;i++ ){
// }
// console.log(numbers[i].length -1 )
// }

// 4. Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini
// dəyişən proqram tərtib edin
// let arr = [3,-5,8,10,1,2,6,-8];
// let largest = arr[0]
// let smallest = arr[0]
// for(let i =0; i<arr.length;i++){
//     if(arr[i]>largest){
//         largest = arr[i]
//     }
//     if(arr[i]<smallest){
//         smallest = arr[i]
//     }
// }
// console.log(smallest ," " , largest);

// 5. Verilmiş array daxilində ixtiyari(random) ədədi ekrana çıxaran
// proqram tərtib edin
// let randomNum = Math.floor(Math.random() * 10 +1);
// alert("Random number is : "+randomNum);

// 14. Substring metodunun işini yerinə yetirən funksiya yaradın
// function substringFunction(str, startIndex, endIndex) {
//         return str.substring(startIndex,endIndex);
//     }
// console.log(substringFunction("Hello World", 1, 5));

// 15. indexOf metodunun işini yerinə yetirən funksiya yaradın

// function findindex(str,index){

//     return str.indexOf(index);
// }
    
//     console.log(findindex("Hello World","o"));

// 13. Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın
// function addNumbers(num1, num2) {
//     return num1 + num2;
//   }
//   let result = addNumbers(5, 3);


// 6. 1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana
// verin
// for (var i = 0; i < 100;i++){
//     if((i+1)%2==1){
//         console.log(i+1);
//         }
// }

// 7. Daxil olunmuş ifadənin polindrom olduğunu yoxlayın. (polindrom
//     dedikdə tərsi və düzü eyni olan ifadə başa düşülür məsələn ütü,
//     121,1331,4554 və s.)
// let string = +prompt("Palindromu yoxla")
// function validatePalin(str) {  
//     const len = string.length;  
//     for (let i = 0; i < len / 2; i++) {  
//         if (string[i] !== string[len - 1 - i]) {  
//             alert( 'Palindrom deyil');  
//         }  
//     }  
//     alert( 'Palindromdur');  
// }  
// console.log(validatePalin(string));

// 8. Daxil olunmuş iki sözün anaqram olduğunu yoxlayın ( anaqram
//     dedikdə sözlərinin tərkibinin eyni olması başa düşülür, məsələn oslo
//     solo və s.)

// function checkAnagram(a, b) {
//     if (a.length !== b.length) {
//         return false;
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     let result = (str1 === str2);
//     return result;
// }
// console.log(checkAnagram('salam', 'malas'));

// 10. İstifadəçi daxil edən ədəd sayda ixtiyarı(random) simvoldan ibarət
// string ifadə yaradın (məsələn input:5 output: qeg8d)
// function makeid(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }

// console.log(makeid(5));

// 2 tarix arasındakı intervalı tapın. ( nəticə : 1 il 3ay 5 gün – formatında
//     olmalıdı)
// const date = new Date()
// date.setFullYear()
