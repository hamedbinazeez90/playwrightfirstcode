// console.log("hello world from Java Script")
// let a =200.0
// let b ="hamed"
// let required = true
// console.log(typeof(a) + "   "+typeof(b)+"   "+typeof(required))
// console.log(!required);
console.log("******************************")
 
// const flag = true
// if(!flag)
// {
//     console.log("passed")
// }
// else
// {   console.log(flag)// flag is true but we are making the condition  failed
//     console.log("failed")
// }
 
console.log("**********************************")
 
// for(let i=0;i<=10;i++)
// {
//     if (i%2==0 && i%5==0)
//     {
//         console.log("number divisible by 0 and 5 is "+i) // numbers divisible by 2 and 5 , means remainder is 0
//     }
// }

// for(let i=0;i<=10;i++)
// {
//     if (i%2==0 || i%5==0)
//     {
//         console.log("number divisible by 2 or 5 is "+i) // numbers divisible by 2 and 5 , means remainder is 0
//     }
// }
 
 
 
console.log("**************************")
 
// var marks1 =Array[5]
// var marks2 = new Array(1,2,5,6,22)// or directly below line
// let marks=[1,3,5]
// marks[3] = 66
// console.log(marks)
// console.log(marks[2])
// console.log(marks.length)//length of array
// marks.push(33)// to add elements to array at the end
// console.log("after push 33")
// console.log(marks)
// marks.pop() //emoves at the end
// console.log("after pop")
// console.log(marks)
// marks.unshift(17)// add elements at the start
// console.log("after unshift 17")
// console.log(marks)
// console.log(marks.includes(77))// check if 77 present in array
// submarks =marks.slice(2,5)// creates sub array
// console.log("after slicing")
// console.log(submarks)
 
console.log("**************************")
// const marks3=new Array(1,3,5,66)
// let sum1=0
// for(let i=0;i<=marks3.length-1;i++)
// {
//     sum1= sum1+marks3[i]
// }
// console.log("sum of array is   "+sum1)
 
console.log("*****************")
// let marks4=new Array(1,3,5,66)
// let sum=0
// console.log(marks4.reduce((sum,marks4)=>sum+marks4,0))//shortcut to sum array elements
  
console.log("*****************")
////var scope-->functional level scope, outside function var is not visible
////let sope-->block level
// var greet="morning"
// if(1==1)
// {
//     var greet ="good afternoon"
//     console.log("printing inside if loop: " + greet)
// }
// function abc()
// {
//     var greet ="morning"
//     console.log("inside the function " +greet)
// }
// abc()
// console.log(greet)//afternoon as global change
 

// let greet1="morning"
// if(1==1)
// {
//     let greet1= "afternoon"
// }
// console.log("after if loop: " + greet1)
 
console.log("***************************")
// let day=" tuesday "
// console.log(day[1])
// console.log(day.length)//length of the string method is length (property) not length()
// let subday=day.slice(0,4)
// console.log("Length of subday: " + subday.length)
// console.log(subday)
// console.log(subday[1])
 
// let splitday = day.split("s")
// console.log(splitday[0].trim())
 
 
console.log("********************")
 
// let date1="23"
// let date2="27"
// let diff = parseInt(date2) - parseInt(date1)// convert string to the number
// console.log("difference of the dates is  " +diff.toString())// convert int to string
 
 
console.log("********PROPERTIES***************")
 
let person = {
  firstname: "mohammad",
  lastname: "hamed",
  fullname: function() {
    console.log(this.firstname + " " + this.lastname);
  }
};
console.log("I am printing fullname: " + person.fullname);
console.log("I am printing: " + JSON.stringify(person));
person.gender = 'male';
person.age = 43
console.log("after adding gender: " + JSON.stringify(person));
delete person.gender;
console.log(JSON.stringify(person));
person.fullname(); // prints "mohammad hamed"
console.log(person.firstname)



console.log("*********ARRAY and STRING PROPERTIES*********")
  
  // const numbers = [10, 20, 30, 40];
  // console.assert(numbers.length === 4, "Array should have 4 elements");   // Array length check

  // const name = "Hamed";
  // console.assert(name.length === 5, "Name should have 5 characters");      // String length check

  // const name="my name is hamed"
  // let rev="";
  // for(let i=name.length-1;i>=0;i--)
  // {
  //   rev=rev+name[i]

  // }
  // console.log("reverse of the string is " + rev)

  // let name1="my name is hamed"
  // let reversed=[];
  // reversed=name1.split(" ");
  // console.log("values before reverse are " + reversed)
  //  //console.log("reverse of the string using split is " + reversed.reverse())
  // console.log("reverse of the string using split and join is " + reversed.reverse().join(" "))
 


  //   const text = "Hello World";
  // console.assert(text.length === 11, `"Hello World" has 11 characters`);     // "Hello World" has 11 characters

console.log("*****************")

  // console.log('hello world');
// const data = [1, 2, 2, 3, 4, 4, 5];
// console.log ([...new Set(data)]);//remove duplicates from array

// const arr = [{id:1, x:2}, {id:2, x:2}, {id:3, x:2}];

// const allHaveId = arr.every(obj => obj.hasOwnProperty("id"));
// console.log(allHaveId); // true (agar sab objects me id hai)

// const users = [
//   { name: 'Alice', role: 'admin' },
//   { name: 'Bob', role: 'user' },
//   { name: 'Charlie', role: 'admin' }
// ];
 
// //print names of people who r admin in uppercase
// console.log((users[0].name).toUpperCase())
// console.log((users[2].name).toUpperCase())
// console.log(users.every(obj=>obj.hasOwnProperty("name")))


//to check if any element present in array
// const a = [2,3,4,5,1];
// console.log(a.includes(1)); // true
// const b = ['apple', 'banana', 'orange'];
// console.log(b.includes('grape')); // false

//In JavaScript, the equivalent of Java's contains() -----
// ----is usually done with includes()
// let text = "Playwright with JavaScript";
// console.log(text.includes("JavaScript")); // true
// console.log(text.includes("Python"));     // false


// const arr = [{id:1, x:2, y:3}, {id:2, x:2, y:4}, {id:3, x:2, y:5}];

// const allHaveId = arr.every(obj => obj.hasOwnProperty("id"));
// console.log(allHaveId); // true (agar sab objects me id hai)
// console.log(arr[2].x);





