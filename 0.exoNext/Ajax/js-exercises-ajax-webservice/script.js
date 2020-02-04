async function getData() {
    //await the response of the fetch call
    let response = await fetch('https://thatsthespir.it/api');
    //proceed once the first promise is resolved.
    let data = await response.json();
    //proceed only when the second promise is resolved
    console.log(data);
    document.getElementById('quote').innerHTML = 

    `
        <blockquote class="blockquote">
            <h4 class="title">
            <strong class="quote">${data.quote}</strong>
            </h4>
            <img class="img" src="${data.photo}" style="clear:both">

            <p class="author">${data.author}</p>
            
        </blockquote>`
    
}
getData();

