    let reset = document.getElementById("reset");


    Array.from(document.querySelectorAll('.hidden')).forEach(element => {
        reset.addEventListener('click', () => {

            element.style.opacity = "0%";
        })

    })

    // reset.addEventListener('click',()=>{
    //     console.log("ok");
    // })