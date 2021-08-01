var roster = []

function addNew() {
    var newName = prompt("What name would ypu like to add?");
    roster.push(newName)
}


function remove() {
    remName = prompt("What name would you like to remove?")
    var index = roster.indexOf(remName);
    roster.splice(index, 1) 
}

function display(){
    console.log(roster);
}

var start = prompt("Would you like to start the web app? y/n");
var request = "empty";

if(start === 'y'){
    while (request != "quit"){
        request = prompt("Please select an action: Add, Remove, display or quit.")
        if(request === 'add'){
            addNew();
        } 
        else if(request === 'display'){
            display();
        }
        else if(request === 'remove'){
            remove();
        }else{
            alert("Not recognized")
            // request = "quit"
        }
    }
}
alert("Thanks for using the web app, Please refresh to start over.")


// const array = [2, 5, 9];

// console.log(array);

// const index = array.indexOf(5);
// if (index > -1) {
//   array.splice(index, 1);
// }

// // array = [2, 9]
// console.log(array); 