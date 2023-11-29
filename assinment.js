
//print 1 to 100
console.log("Print 1 to 100 numbers")
for (i=1;i<=100;i++){
    console.log(i)
}

console.log("Print 10 to 100 numbers must be even")
for(i=10;i<=100;i++){
    if (i%2==0){
        console.log(i)
    }
}

console.log("Print 10 to 100 numbers must be odd")
for(i=10;i<=100;i++){
    if (i%2!=0){
        console.log(i)
    }
}
console.log("remiander of the given numbers")
var a=5
var b=6
remainder=a%b
console.log("Remainder of", a, "and", b, "is", remainder)

console.log("check the current bill")
var units_for_demostic=50;
var demostic=units_for_demostic*10;
var units_for_industrial=100;
industrial= units_for_industrial*15;
console.log("demostic current bill =",demostic)
console.log("industrial current bill =",industrial)

//net salary

var gross_salary=45000
var deductions=9000
net_salary=gross_salary-deductions
console.log("your net salary is per month",net_salary)

//find the emi for given amount

var amount=50000
var interst=4
var months=12
var rate_of_intrest=4/12
var intrest_for_amount=amount*rate_of_intrest*months/100
console.log(intrest_for_amount,"this is intrest for total amount")
total=amount+intrest_for_amount
emi=total/months
console.log(emi,"this is the emi of given amount")

//find the insurence of given amount
var amount=100000
var insurence_rate=20
insurence_amount=amount*(insurence_rate/100)
console.log("Therefore, with an insurance rate of 20% for an amount of Rs.",amount, "the insurance amount would be Rs.",insurence_amount )

//no of days in given months
var months=3
var no_days=months*30.4
console.log("30.4 This value accounts for the different lengths of months (28, 30, or 31 days) and the leap year, averaging them out")
console.log(no_days)

//no of years  in  given hours
var hours=50000
var no_of_years=hours/24*365
console.log(no_of_years,"Approximently 7.6years")

//inches for given meteer

var meters=5
console.log("1meter=39.37inches")
var inches=5*39.37
console.log(inches)

//centemeters into acers

var cm=10000
var meters=cm/10000
var acers=meters/40468.6
console.log(acers)










  