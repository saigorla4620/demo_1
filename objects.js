// //objects 07/11/23
// //objects means simply real world entities such as mobile,laptop,bike and car etc...
// //objects have attributes/properties and actions/behaviour
// //objects is collection of elemnets in the form of properties and methods
// //

// //-> ways to create object
// // //object literal
// // syntax-
//             // var a={
//             //     key1:value1,key2:'value2'
//             // }
// // example-
//             // let a={
//             //     name:'sai',cource:'Fs',location:'hyd',}
              
//             // // a.age=24 //adding age and its value
//             // // a.name="sai gorla"  //updating the name
//             // // console.log(a.name,a.age)  
//             // console.log(a)


// //using a new keyword with object constructer
//         //  let bike=new Object({campany:'honda',model:2023})
//         //     // bike.campany="Honda"
//         //     // bike.model=2023
//         //     bike.color="red"
//         //     console.log(bike)





//     //new keyword with function
            
//     //"This" refers to the object
//             //  function sai(name,age,cource,loc){
//             //      this.name=name
//             //      this.age=age
//             //      this.cource=cource
//             //      this.loaction=loc
//             //  }
//             //  var obj1=new sai('sai',24,'fs','bhimavaram')
//             //  var obj2=new sai('vamsi',24,'aws','bangolore')
//             //  var obj3=new sai('viswas',24,'ds','hyderabad')
//             //  console.log(obj1)
//             //  console.log(obj2)


// //
// //using classes

// // class c1{
// //     constructor(name,age,pno){
// //         this.name=name
// //         this.age=age
// //         this.pno=pno
// //    }
// // }
// // var obj1=new c1('sai',24,9010481279)
// // console.log(obj1)



// //object create method
// console.log("object create method")
// var b=Object.create(obj1,{
//     loc:{
//         value:"hyd"},cource:{
//             vlaue:'fs'
//         }
// })
// b.name='sai'
// console.log(b)





//call() apply() bind()

/*call()
the call() method calls the function with a given 'this' value and 
allows  passing in the element in argument one by one seperating with comma. 

apply()




bind()
with the bind method, an object can barrow a method from antother object

// */ 
// a={
//     data:function(place){
//         console.log(this.name + " "+ this.cource+ " "+ this.loc + " "+ place )
//     }
// }
// b={
//     name:"sai",
//     cource:"fs",
//     loc:"hyd",
// }
// a.data.bind(b,"erragada")()


// class sai{
//     constructor(name,roll,no,adress){
//         this.name=name
//         this.id=roll
//         this.mobile=no
//         this.adress=adress
//     }
//     study(){
//         console.log("studying")
//     }

// }
// obj1=new sai("sai",123,9010481279,'bvrm')
// console.log(obj1)
// obj1.study()


s="sai gorla web developer"
arr=s.split('')
console.log(arr)
count=0
for (i=0;i<arr.length;i++){
    if(arr[i]=="a")
    count++
}
console.log(count)