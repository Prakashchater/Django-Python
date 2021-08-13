var header = document.querySelector("h1")


function getRandomColor(){
    var letter = "0123456789ABCDEF";
    var color = '#';
    for(var i = 0; i <6; i++){
        color += letter[Math.floor(Math.random()*16)];

    }
    return color
}

// Simple function for clarity
function changeHeaderColor(){
    colorInput = getRandomColor()
    header.style.color = colorInput;
}
// Perfoem actions over intervals (milliseconds)
setInterval("changeHeaderColor()",500)