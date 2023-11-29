let input=document.getElementById('location')
let btn=document.getElementById('btn')
let temps=document.getElementById('temp')
let desc=document.getElementById('discription')
let locationVal=document.getElementById('location-des')

const apikey='1dd800d392870bf45ba6400343a874e6'
btn.onclick=function(){
    if(input.value==""){
        alert("Enter the Location")
    }
    else{
       loc=input.value
       var url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`

       fetch(url).then(res => res.json()).then(data =>{
         console.log(data)
         let {temp}=data.main
         let {name}=data


         console.log(name)
         let {description}=data.weather[0]

         temps.innerText=Math.floor(temp-272)

         locationVal.textContent=name

         desc.innerHTML=description
         
         

       }).catch(e=>{
        alert("enter valid city or pincode")
       })

      
    }
    input.value=''
}
