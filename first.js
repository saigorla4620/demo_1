// add two numbers
var a=10;
var b=20;
var c=50;
var d=60;
var e=40;
var add=a+b
console.log(a,'+',b,'=',add)

//division of two given numbers
console.log()
var add=a/b
console.log(c,'/',d,'=',add)
console.log()
//average of given 5 numbers
average=a+b+c+d+e/5
console.log("average of above five values is",average)

//Area of triangle
console.log()
var base=10;
var height=20;
area_tri=1/2*base*height;
console.log("area of traingle")
console.log("base =", base)
console.log("height =",height)
console.log("area_triangle =",area_tri)

//area of circle
console.log()
var radius=20;
area_of_cir=3.14*radius**2;
console.log("Area of circle")
console.log("radius =", radius)
console.log("area_of_cir =",area_of_cir)

//convert seconds into hour
console.log()
var seconds=420;
minutes=seconds/60;
console.log(seconds,"secs in mins is",minutes,"minutes")

//meters into miilmeters
console.log()
var meters=100;
milimeter=meters*1000;
console.log(meters,"m into milimeters is",milimeter,"mm")

//ruppe into dollar
console.log()
var rupee=10000;
dollar=rupee*0.012;
console.log(rupee,"rs is",dollar,"dollars")

//find simple interst 
console.log()
var amount=100000;
var interst=2;
var months=24;
si=amount*months*interst/100;
console.log("simple intrest of",amount,"for the intrest is",interst,"and the time is",months,"=",si)
console.log()
//even or odd
var value=4620;
if (value%2==0){
    console.log(value,"is even")
}
else{
    console.log(value,"is odd")
}

//check below number is positive or negtive
console.log()
var number=25;
if (number>0){
    console.log(number,"is a positive number")
}
else{
    console.log(number,"is a negitive number")
}

//given number is divisible by 5 or not
console.log()
var number=225;
if (number%5==0){
    console.log(number,"is divisible of 5")
}
else{
    console.log(number,"is not divisible of 5")
}

//given number is divisible by 2,3 and 4
console.log()
var a=6;
if (a%2==0){
    if (a%3==0){
        if (a%4==0){
        console.log(a, "is divisible by 2 3 and 4")
        }
        else{
            console.log(a, "is not divisible by  4")
        }
    
    }
    else{
        console.log(a, "is not divisible by 3")
    }
}
else{
    console.log(a, "is not divisible by 2")
}

//leap or not
console.log()
var year=100;
if ((year%400==0) || ((year%4==0) && (year%100!=0))){
    console.log(year,"its a leap year")
}
else{
    console.log(year,"its not a leap year")
}


//valid date or not
console.log()
var date=4
if ((date>=1) && (date<=31)){
    if(date<=31){}
        console.log("its a valid date")
}
    else{
        console.log("its not a valid")
    }


//vowels check
console.log()
var char="I";
if (char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){
    console.log(char, "is a vowel")
}

else if (char=="A" || char=="E" || char=="I" || char=="O" || char=="U"){
    console.log(char, "is a vowel")
}
else{
    console.log(char, "is not a vowel")
}

//17.check given character is space or not?
let character = ''
console.log()
if(character == ''){
    console.log('character having space ')
}
else{
    console.log('character doesnt have space')
}











