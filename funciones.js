let url = "https://api.thecatapi.com/v1/images/search"
let imagenCont = document.getElementById("imagen")
let botonSito = document.getElementById("botonaso")

botonSito.addEventListener("click",()=>{
    imagenCont.innerHTML=""
    fetch(url) 
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        let imagesUrl = data[0].url
        let imageElement = document.createElement("img")
        imageElement.classList.add("saliolafoto")
        imageElement.src = imagesUrl
        imagenCont.appendChild(imageElement)
    })
}) 

