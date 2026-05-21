console.log("hello world from Java Script")
let a =200.0
let b ="hamed"
let required = true
console.log(typeof(a) + "   "+typeof(b)+"   "+typeof(required))
console.log(!required);
console.log("******************************")
 
const flag = true
if(!flag)
{
    console.log("passed")
}
else
{   console.log(flag)// flag is true but we are making the condition  failed
    console.log("failed")
}
 
console.log("**********************************")
 
for(let i=0;i<=10;i++)
{
    if (i%2==0 && i%5==0)
    {
        console.log("number divisible by 0 and 5 is "+i) // numbers divisible by 2 and 5 , means remainder is 0
    }
}
 
 
console.log("**************************")
 
var marks1 =Array[5]
var marks2 = new Array(1,2,5,6,22)// or directly below line
let marks=[1,3,5,66]
marks[3] = 66
console.log(marks)
console.log(marks[2])
console.log(marks.length)//length of array
marks.push(33)// to add elements to array at the end
console.log(marks)
marks.pop() //emoves at the end
marks.unshift(0)// add elements at the start
console.log(marks)
console.log(marks.includes(77))// check if 77 present in array
submarks =marks.slice(2,5)// creates sub array
console.log(submarks)
 
console.log("**************************")
let marks3=new Array(1,3,5,66)
let sum1=0
for(let i=0;i<=marks3.length-1;i++)
{
    sum1= sum1+marks3[i]
}
console.log("sum of array is   "+sum1)
 
console.log("*****************")
let marks4=new Array(1,3,5,66)
let sum=0
console.log(marks.reduce((sum,marks4)=>sum+marks4,0))//shortcut to sum array elements
 
 
console.log("*****************")
// //var scope-->global/functional level
// //let sope-->global level/block level
// // var greet="morning"
// // if(1==1)
// // {
// //     var greet ="afternoon"
// }
function abc()
{
    var greet ="morning"
    console.log(greet)
}
// console.log(greet)//afternoon as global change
 
//but see for let
let greet1="morning"
if(1==1)
{
    let greet1= "afternoon"
}
console.log(greet1)
 
console.log("***************************")
let day=" tuesday "
console.log(day[1])
console.log(day.length)// length of the string method is length
let subday=day.slice(0,4)
console.log(subday.length)
console.log(subday[1])
 
let splitday = day.split("s")
console.log(splitday[0].trim())
 
 
console.log("********************")
 
let date1="23"
let date2="27"
let diff = parseInt(date2) - parseInt(date1)// convert string to the number
console.log("difference of the dates is  " +diff.toString())// convert int to string
 
 
console.log("********PROPERTIES***************")
 
let person ={
firstname:'mohammad',
lastname:'hamed',
fullname: function()
    {
        console.log(this.firstname+this.lastname)
    }
}
console.log(person)
person.gender = 'male'
console.log(person)
delete person.gender
console.log(person)
console.log(person.fullname())