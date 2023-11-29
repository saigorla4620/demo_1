 //functions 
        // function is a block of statemnents 



        //1.normal function
        // var  a=10
        // var  b=50
        //    //with parameters and with return
        //     function display_1(a,b,c){
        //         console.log("a=",a)
        //         console.log("b=",b)
        //         return a*b
               


        //     }
        //      console.log(display_1(10,30))
           
           
        //    //with parameters and with out return
        //          function display_2(a,b){
        //             console.log("a=",a)
        //             console.log("b=",b)
        //             console.log(a+b)


        //          }
        //          display_2(2,5)
              
           
        //    //without parameters and with return
        //    function display_3(){
        //     return "Sai Gorla"
        // }
        //    console.log(display_3())
   
   
        //    //without parameters and without return
        
        // function display_4(){
        //      console.log(a*b)
        // }
        // display_4()
//2arrow function
    //   var a=()=> {return 14+26}
    //  console.log(a())

     
//3.anonymus function and  function expresstion
        // var a=function (){
        //     return "Sai gorla"
        // }
        // var b=a();
        // console.log(b);

//call back function

    // passing the function as an arrgument to the another function

//iife(immedietely invoked function exprestion)
    //    var a=(function name(){
    //         console.log(20+30)
    //     })
    //     ();
           

// function sai(){
//     var a=10
//     console.log("a=",a)
// }
// for(i=1;i<=100;i++){
//     sai()
// }

// a=[12,23,14,15,14,12]
// n=a.length
// if (a[0]==a[n-1]){
//   console.log("it same")


// }
// else{
//     console.log("not same")
// }

// const a=new String("mom")
// array=a.split("")
// rev=array.reverse()
// console.log(rev)
// b=rev.join('')
// console.log(b)
// console.log(typeof b)
// if (a==b){
//     console.log("Its a palindrom")

// }
// else{
//     console.log("Its  not palindrom")
// }
// a="saigorla"
// array=a.split('')
// console.log(array)
// array.push("g")
// b=array.join('')
// console.log(b)



// function sai(a){
//     var b=10
//     console.log(a+b)
// }
// sai(10)
// var b=15
// console.log(b)
// var func
// func()
// func=function (){
//     console.log("its hosting")
// }

// function example() {
//     var a = 10;
//     let b = 20;
//     const c = 30;
  
//     if (true) {
//       var a = 50; // Re-declares 'a'
//       let b = 40; // Creates a new 'b' in the block scope
//     console.log(b)
//        const c=12
//     console.log(c)
    
//     }
    
  
//     console.log(a); // Output: 50
//     console.log(b); // Output: 20
//     console.log(c); // Output: 30
//   }
  
//   example();


// let s="saigorla"
// s.toLowerCase()
// length=s.length
// vowels=[]
// consonents=[]

// for(i=s[0];i<s.length;i++){
//     if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u'){
//         vowels.push(s[i])
//     }
//     else{
//         consonents.push(s[i])
//     }

// }
// console.log("vowels::",vowels)
// console.log("consonents::",consonents)


// function separateVowelsAndConsonants(inputString) {
//     const vowels = [];
//     const consonants = [];
    
//     const lowerCaseString = inputString.toLowerCase();
  
//     for (let i = 0; i < lowerCaseString.length; i++) {
//       const char = lowerCaseString[i];
  
//       if (/[aeiou]/.test(char)) {
//         vowels.push(char);
//       } else if (/[a-z]/.test(char)) {
//         consonants.push(char);
//       }
//     }
  
//     return { vowels, consonants };
//   }
  
//   // Example usage:
//   const inputString = "Hello World!";
//   const { vowels, consonants } = separateVowelsAndConsonants(inputString);
  
//   console.log("Vowels: ", vowels);
//   console.log("Consonants: ", consonants);
  

// a=["a","b","c","d"]
// ran=Math.floor(Math.random()*a.length)

// console.log(a[ran])
// a=()=>{ return 14+16 }
// a


console.log(typeof this)