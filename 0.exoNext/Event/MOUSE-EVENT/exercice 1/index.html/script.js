(() => {
    const divs = Array.from(document.getElementsByClassName('hoverMe'));

    // La méthode Array.from() permet de créer une nouvelle instance d'Array 
    // (une copie superficielle) à partir d'un objet itérable ou semblable à un tableau.

    // ### Exercices 1

    // - Crée (en HTML) 3 `DIV` possedant la même classe 'hoverMe'
    // - Faire disparaitre les divs lorsqu'on passe la souris dessus

    //Tip : utiliser le `mouseenter ` ou `mouseover `
    // exercice 1

    divs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            div.style.opacity = "0%";
            div.style.transitionDuration = "0s";
        })
    })


    // exercice 2

    document.getElementById('reset').addEventListener("click", () => {

        divs.forEach(div => {
            div.style.opacity = "100%";
            div.style.transitionDuration = "2s";
        })
    })


    // exercice 3

    document.addEventListener("mousemove", (recu) => {
        document.getElementById('targetX').innerHTML = recu.x;
    })

    document.addEventListener("mousemove", (recu) => {
        document.getElementById('targetY').innerHTML = recu.y;
    })
})()