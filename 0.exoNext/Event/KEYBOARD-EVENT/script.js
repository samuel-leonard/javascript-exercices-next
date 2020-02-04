// let handleKey = (event) => {
//     // Faire quelque chose!
// };

// window.addEventListener ('keydown', handleKey);
// ```

// - keydown
// - keypress
// - keyup
document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
        case 96:

            document.getElementById("character").style.backgroundColor = "red";
            break;

        case 97:

            document.getElementById("character").style.backgroundColor = "blue";
            break;

        case 98:

            document.getElementById("character").style.backgroundColor = "yellow";
            break;
        case 99:

            document.getElementById("character").style.backgroundColor = "orange";
            break;
        case 100:

            document.getElementById("character").style.backgroundColor = "pink";
            break;
        case 101:

            document.getElementById("character").style.backgroundColor = "purple";
            break;
        case 102:

            document.getElementById("character").style.backgroundColor = "tomato";
            break;
        case 103:

            document.getElementById("character").style.backgroundColor = "silver";
            break;
        case 104:

            document.getElementById("character").style.backgroundColor = "orange";
            break;
        case 105:

            document.getElementById("character").style.backgroundColor = "cyan";
            break;
    }

    console.log(event.keyCode)

})