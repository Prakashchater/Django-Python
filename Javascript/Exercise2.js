// var employee = {
//     name:"Prakash Chater",
//     job:"Programmer",
//     age:24,
//     nameLength: function(){
//         console.log(this.name.length);
//     } 

// }


// var employee = {
//     name:"Prakash Chater",
//     job:"Programmer",
//     age:24,
//     report: function(){
//         alert("Job is " +this.job)

//     }

// }

var employee = {
    name:"Prakash Chater",
    job:"Programmer",
    age:24,
    lastName: function(){
        console.log(this.name.split(" ")[1])
    }

}