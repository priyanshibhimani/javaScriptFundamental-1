/*let js="amazing";
console.log(40-8+23+10);
let PI=3.14;
let myFirstJob="coder";
let mySecondJob="backend developer";
console.log(PI);
console.log(myFirstJob);
console.log(mySecondJob);*/

/*let firstName="john";
let year;
let isAdmin=true;
console.log(typeof firstName);
console.log(typeof year);
console.log(typeof isAdmin);
year=1991;
console.log("type of year: "+typeof year);*/

// let a=13;
// a=24;
// const b=3;
// var standred=2;
// standred=3;


//type of opratot
//1. typeof-give the type of oprateor
// const ageRiya=46;
// const now =2037;
// const ageJy=now-2018;
//comapre >,< ,>=,<=
// console.log(ageJy >ageRiya);
// console.log(now-2022<now-2018);
//assignment
// let a=20
// a++;
// console.log(a);
// a--;
// console.log(a);
// a+=12;
// console.log(a);
// a*=2
// console.log(a);


//coding challange 1 🚀
// const massMark=78
// // prompt("enter weight");
// const heightMark=1.69
// // prompt("enter height");
// const massJhon=92
// // prompt("enter weight");
// const heightJhon=1.95
// prompt("enter height");

// const massMark=95
// const heightMark=1.88
// const massJhon=85
// const heightJhon=1.76
// const BMIMark=massMark/(heightMark*heightMark);
// const BMIJhon=massJhon/(heightJhon**2);
// const markHigherBMI=BMIMark>BMIJhon;
// console.log(BMIMark,BMIJhon,markHigherBMI);


//String and template letreals
/*const job="teacher";
const birthYear=1991;
const year=2037;
const firstName="jonas";
const jonas="i'm " + firstName + " a " + (year-birthYear)+" year old " +job +"."
const jonas=`i'm ${firstName} a ${year-birthYear} year old ${job}.`
console.log(jonas);
console.log("string with \n\
multiple \n\
liness.....");
console.log(`String with
multiple 
lines`)*/


//if..else conditional statement
/*const age=15;
const year=18;
if(age>=18){
    console.log("sarah can start driving 🚗")
}
else{
    console.log(`${year-age} years left to get lience 🙃`);
}

const birthYear=1999;
let century;
if(birthYear<2000){
    century=19;
}
else{
    century=20
}
console.log(century);*/

//coding challange 2 🚀
/*const massMark=78
const heightMark=1.69
const massJhon=92
const heightJhon=1.95
// const massMark=95
// const heightMark=1.88
// const massJhon=85
// const heightJhon=1.76
const BMIMark=massMark/(heightMark*heightMark);
const BMIJhon=massJhon/(heightJhon**2);
if(BMIMark>BMIJhon){
    console.log(`Mark's BMI (${BMIMark}) is higher than john's (${BMIJhon})`);
}
else{
    console.log(`john's BMI (${BMIJhon}) is higher than Mark's (${BMIMark})`);
}*/

//type conversion 
/*const inputYear='1991';
console.log(typeof inputYear);
console.log(Number(inputYear)+18);
//type coercion (occures when oprator work with two different type of data)
console.log('1'+2);
console.log("34"-"14");
console.log("6"/2);
let n= '1'+1;
n=n-1
console.log(n);*/

//truthy and falsy values
//falsy values:NaN,0,'',undefined,null this are coverted in to false all the other values are converted into true 
/*console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("hii"));

const money=10;
if(money){
    console.log("don't spend it all 😶");
}
else{
    console.log("you should get a job.😏");
}

let height=0;
if(height){
    console.log("height is defined");
}
else{
    console.log("heigth is not defined");
}*/

//equality oprator === and ==
/*age=18;
const num=Number(prompt("enter your favourite number!"));
if(num===23){
    console.log("23 is a good number:(strict)");
}
if(num==23){
    console.log("23 is a good number:(losse)");
}
else if (num===7){
    console.log("7 is a good num!")
}
else if(num===26){
    console.log("26 is realy greate number.");
}
else{
    console.log("why number is not 26,7,23?");
}
if(num){
    console.log(`${num} is such agreate number 😀`);
}*/

//coding challange 3 🚀
// const dolpineSc1=97;
// const dolpineSc2=112;
// const dolpineSc3=101;
// const kolasSc1=109;
// const kolasSc2=95;
// const kolasSc3=50;

/*const dolpineSc1=97;
const dolpineSc2=112;
const dolpineSc3=50;
const kolasSc1=109;
const kolasSc2=95;
const kolasSc3=80;
dolpineAvg=(dolpineSc1+dolpineSc2+dolpineSc3)/3;
kolasAvg=(kolasSc1+kolasSc2+kolasSc3)/3;
console.log(dolpineAvg,kolasAvg);

if(dolpineAvg>kolasAvg && dolpineAvg>=100){
    console.log("Dolphine is winner");
}
else if( kolasAvg>dolpineAvg && kolasAvg>=100){
    console.log("kolas is winner");
}
else if(kolasAvg>=100 && dolpineAvg>=100){
    console.log("both wins trophy.")
}
else{
    console.log("No one wins");
}*/

//switch statement
/*const day='sun';
switch(day){
    case "monday":
        console.log("today is monday. do meeting");
        break;
    case "tuesday":
        console.log("tuesday! project work");
        break;
    case "wednesday":
    case "thursday":
        console.log("do review");
        break;
    case "friday":
        console.log("complete project");
        break;
    case "saturday":
        console.log("yay! weekend");
        break;
    case "sunday":
        console.log("Enjoy weekend");
        break;
    default:
        console.log("not a valid day!");
        break;
}*/

//ternery or conditinal oprator
/*const age=15;
const drink= age>=18?'wine':'water';
console.log(drink);
console.log(`i like to drink ${age>=18?'wine':'water'}`);*/


//coding challange 4 🚀
const bill=430;
const tip= bill>=50 && bill<=300 ? (bill*15)/100: (bill*20)/100;
console.log(`your bill is ${bill} ,the tip is ${tip} and the total value is ${bill+tip}`);


