/*
first try
let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://thatsthespir.it/api', true)
xhr.onload = function() 
    {
        if (this.status === 200) 
            {
                document.getElementById("quote").innerHTML = this.responseText;
            } else {
                alert("Sorry, your request did not reach");
            }
    }
xhr.send();*/

fetch('https://thatsthespir.it/api')
.then(res => res.json())
.then(data => {
    let quote =data.quote
    let author =data.author
    let photo=data.photo
    let quotes=data.total_quotes
    document.getElementById("quote").innerText = quote;
    document.getElementById("photo").src = photo;
    document.getElementById("author").innerText = author;
    document.getElementById("total_quotes").innerHTML = quotes + " quotes";
})
.catch(error=>{
    document.getElementById("error").style.display=''
    document.getElementById("error").innerHTML="Sorry, your request did not reach. Try again please."

})

