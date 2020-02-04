document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
        case 38:
            document.getElementById("up").classList.add("highlight"); 
            
            break;

        case 40:
            document.getElementById("down").classList.add("highlight"); 
            
            break;

        case 39:
            document.getElementById("left").classList.add("highlight");
            break;

        case 37:
            document.getElementById("right").classList.add("highlight");
            break;
    }

    

})
document.addEventListener("keyup", (event) => {
switch (event.keyCode) {
    case 38:
        document.getElementById("up").classList.remove("highlight"); 
        
        break;

    case 40:
        document.getElementById("down").classList.remove("highlight"); 
        
        break;

    case 39:
        document.getElementById("left").classList.remove("highlight");
        break;

    case 37:
        document.getElementById("right").classList.remove("highlight");
        break;
}


console.log(event.keyCode);
})